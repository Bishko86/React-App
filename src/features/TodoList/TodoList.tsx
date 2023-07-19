import {  useEffect, useState, useContext } from 'react';

import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import "./TodoList.scss";
import { DB, PageSettings, Stores, addData, getStoredData, initIndexDB } from 'indexDB';
import { TodoItem } from './TodoItem/TodoItem';
import { Todo, TodoFormData } from './interfaces';
import { AddTodo } from './AddTodo/AddTodo';
import { ModalContext } from 'core/contexts';
import { ModalDialog } from 'shared/ModalDialog/ModalDialog';

export const TodoList = () => {
  const { t } = useTranslation();
  const [todos, setTodos] = useState<JSX.Element[]>([]);
  const [pageSettings, setPageSettings] = useState<PageSettings>({ pageNumber: 1, pageSize: 5 });
  const [totalCountPages, setTotalCountPages] = useState<number>(0);
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  const addTodo = async () => {
    openModal();
  }

  const saveTodo = async (formData: TodoFormData): Promise<string | Todo> => {
    const createdAt = Date.now();
    const data: Todo = {
      id: -createdAt,
      todo: formData.text,
      dueDate: formData.dueDate,
      createdAt: createdAt,
      checked: false,
    }

    const result = await addData(DB.TODO, Stores.Todo, data);
    setPageSettings({ ...pageSettings });
    closeModal();
    return Promise.resolve(result);
  }

  const getTodos = async () => {
    const data = await getStoredData(DB.TODO, Stores.Todo, pageSettings);
    setTotalCountPages(data.totalCount)

    const todoList = data.items.map((todo) => <TodoItem update={getTodos} {...todo as Todo} key={(todo as Todo).id} />);
    setTodos(todoList);
  }

  const paginateDate = (pageNumber: number) => {
    setPageSettings({ ...pageSettings, pageNumber });
  }

  useEffect(() => {
    initIndexDB(DB.TODO, Stores.Todo);
  }, []);

  useEffect(() => {
    getTodos();
  }, [pageSettings]);

  return (
    <div className="todo">
      <h2 className="todo__header">{t('todo.todo')}</h2>
      <div className="todo__add-wrapper">
        <span className="todo__add" onClick={addTodo}>+ 
          <span className="todo__add-text">{t('todo.add-todo')}</span>
        </span>
        {
          isModalOpen &&
          <ModalDialog title={t('todo.add-todo')}>
            <AddTodo saveTodo={saveTodo} />
          </ModalDialog>
        }
      </div>
      <div className="todo__list">
        <div className="todo__table-header">
          <div className="todo__header-item">{t('todo.header')}</div>
          <div className="todo__header-item">{t('todo.createdAt')}</div>
          <div className="todo__header-item">{t('todo.due-date')}</div>
        </div>
        {todos.length ? todos : <div className="todo__empty">{t('to-do.empty-list')}</div>}
      </div>
      <div className="todo__paginator">
        {Array.from({ length: Math.ceil(totalCountPages / pageSettings.pageSize) }, (_, index) =>
          <span
            className={classNames('todo__page', {
              todo__active: pageSettings.pageNumber === index + 1,
            })}
            onClick={() => paginateDate(index + 1)} key={index + 1}
          >
            {index + 1}
          </span>
        )}
      </div>
    </div>
  );
};
