import React from 'react';
import { Todo } from '../interfaces';

import './TodoItem.scss';
import { DB, Stores, deleteData, updateData } from 'indexDB';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DateTimeHelper } from 'core/helpers';


export const TodoItem: React.FC<Todo & { update: () => void }> = (props): JSX.Element => {
  const { t } = useTranslation();

  const handleCheckbox = async (e: EventTarget & HTMLInputElement) => {
    await updateData(DB.TODO, Stores.Todo, +e.id, 'checked', e.checked);
    props.update();
  }

  const handleDeleteTodo = async () => {
    await deleteData(DB.TODO, Stores.Todo, props.id);
    props.update();
  }

  return (
    <div className="todo__item">
      <div className="todo__checkbox">
        <input
          type="checkbox"
          name="done"
          checked={props.checked}
          id={props.id + ''}
          onChange={(e) => handleCheckbox(e.target)}
        />
      </div>
      <div className={classNames("todo__task", { todo__task__done: props.checked, })}
      >{props.todo}</div>
      <div className={classNames("todo__created-at", { todo__task__done: props.checked, })}>
        {DateTimeHelper.formateDateTo(props.createdAt)}
      </div>
      <div className={classNames("todo__due-date")}>
        {props.dueDate ? DateTimeHelper.formateDateTo(props.dueDate) : t('common.no-data')}
      </div>
      <div className="todo__delete" onClick={handleDeleteTodo}>&#9003;</div>
    </div>
  );
}
