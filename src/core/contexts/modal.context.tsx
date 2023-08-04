import React, { createContext, useState, useMemo, useCallback } from 'react';

import { ModalProviderProps } from 'core/interfaces';

const ModalContext = createContext({
  isModalOpen: false,
  modalData: null as unknown,
  openModal: (modalData?: unknown) => { },
  closeModal: () => { }
});

const ModalProvider: React.FC<ModalProviderProps> = ({ children }): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<unknown>(null);

  const openModal = useCallback((data: unknown) => {
    if (data) {
      setModalData(data);
    }

    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  
  const contextValue = useMemo(() => ({modalData, isModalOpen, openModal, closeModal }), [modalData, isModalOpen, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
