import React from 'react';

import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Todo } from '../interfaces';
import './TodoItem.scss';
import { DB, Stores, deleteData, updateData } from 'indexDB';
import { DateTimeHelper } from 'core/helpers';


export const TodoItem: React.FC<{
  update: () => void,
  editTodo: (todo: Todo) => void,
  todo: Todo,
}> = ({ update, editTodo, todo }): JSX.Element => {
  const { t } = useTranslation();

  const handleCheckbox = async (e: EventTarget & HTMLInputElement) => {
    await updateData(DB.TODO, Stores.Todo, +e.id, e.checked, 'checked');
    update();
  }

  const handleDeleteTodo = async () => {
    await deleteData(DB.TODO, Stores.Todo, todo.id);
    update();
  }

  return (
    <div className="todo__item">
      <div className="todo__checkbox">
        <input
          type="checkbox"
          name="done"
          checked={todo.checked}
          id={todo.id + ''}
          onChange={(e) => handleCheckbox(e.target)}
        />
      </div>
      <div className={classNames("todo__task", { todo__task__done: todo.checked, })}
      >{todo.todo}</div>
      <div className={classNames("todo__created-at", { todo__task__done: todo.checked, })}>
        {DateTimeHelper.formateDateTo(todo.createdAt)}
      </div>
      <div className={classNames("todo__due-date", {todo__expired: todo.expired})}>
        {todo.dueDate ? DateTimeHelper.formateDateTo(todo.dueDate) : t('common.no-data')}
      </div>
      <div className="todo__edit" onClick={() => editTodo(todo)}><ReactSVG src="/icons/edit.svg" /></div>
      <div className="todo__delete" onClick={handleDeleteTodo}>&#9003;</div>
    </div>
  );
}
