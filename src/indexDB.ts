export enum Stores {
  Users = 'users',
  Todo = 'todos',
}

export enum DB {
  USER = 'userDB',
  TODO = 'todoDB',
}

export interface PageSettings {
  pageSize: number;
  pageNumber: number;
}

let version = 1;

/*
  TODO
  * refactor this file.
  * add closing transactions
  * rewrite with class
*/

export const initIndexDB = (dbName: DB, storeName: Stores): Promise<IDBDatabase | Error> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      version = db.version;
      resolve(db);
    };

    request.onerror = () => {
      reject(new Error('Failed to open the database.'));
    }
  });
}

export const addData = <T>(dbName: DB, storeName: Stores, data: T): Promise<T | string> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);

    request.onsuccess = () => {
      const db = request.result;

      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      
      store.put(data);

      tx.oncomplete = () => {
        db.close();
      }

      resolve(data);
    }

    request.onerror = () => {
      const error = request.error?.message;
      reject(error ?? 'Unknown Error');
    }
  });
}

export const getStoredData = <T>(dbName: DB, storeName: Stores, pageSettings: PageSettings): Promise<{items: T[], totalCount: number}> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);
    const { pageNumber, pageSize } = pageSettings;
    let totalCount = 0;
    let data: T[] = [];
    let currentItem = 0;
    const lowerBound = (pageNumber - 1) * pageSize;
    const upperBound = pageNumber * pageSize;

    request.onsuccess = (event: Event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);

      store.count().onsuccess = (event: Event) => {
        totalCount = (event.target as IDBRequest).result;
      }

      store.openCursor().onsuccess = (event: Event) => {
        const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;
        if (!cursor) {
          resolve({items: data, totalCount});
          return;
        }

        if (currentItem >= lowerBound && currentItem < upperBound) {
          data.push(cursor.value);
        }
        currentItem++;

        if (currentItem < upperBound) {
          cursor.continue();
        } else {
          resolve({items: data, totalCount});
        }
      }
    }

    request.onerror = (error) => {
      reject(error)
    }
  })
}

export const deleteData = (dbName: DB, storeName: Stores, key: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);

    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const res = store.delete(key);

      res.onsuccess = () => {
        resolve(true);
      }

      res.onerror = () => {
        reject(false);
      }
    }

    request.onerror = (error) => {
      reject(error)
    }
  });
}

export const updateData = <T>(dbName: DB, storeName: Stores, key: number, value: T, field: string | null): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);

    request.onsuccess = (event: Event) => {
      const db = (event.target as IDBOpenDBRequest).result;


      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const getRequest = store.get(key);

      getRequest.onerror = (event: Event) => {
        reject((event.target as IDBOpenDBRequest).error);
      }

      getRequest.onsuccess = (event: Event) => {
        const item = (event.target as IDBOpenDBRequest).result;

        if (item && field) {
          const updatedData = { ...item, [field]: value };
          store.put(updatedData);
        }

        if (item && !field) {
          const updatedData = { ...item, ...value };
          store.put(updatedData);
        }

        resolve(true);
      }
    }

    request.onerror = (event: Event) => {
      reject((event.target as IDBOpenDBRequest).error);
    }
  });
}
