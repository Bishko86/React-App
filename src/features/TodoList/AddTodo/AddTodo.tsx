import { ChangeEvent, useState, FormEvent, FC } from 'react';

import './AddTodo.scss';
import { Todo, TodoFormData } from '../interfaces';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from 'shared/ErrorMessage/ErrorMessage';


export const AddTodo: FC<{ saveTodo: (formdata: TodoFormData) => Promise<string | Todo> }> = ({ saveTodo }): JSX.Element => {
  const [formData, setFormData] = useState<TodoFormData>({ text: "", dueDate: Date.now(), invalid: false });
  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, invalid: false }));
  };

  const saveFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.text.trim().length) {
      setFormData((prevFormData) => ({ ...prevFormData, invalid: true }));
      console.error(formData);

      return;
    }

    saveTodo(formData).then((data) => {
      console.error(data);
    });
  }
  const formattedDueDate = new Date(formData.dueDate).toJSON().slice(0, 10);

  return (
    <div className="add-todo">
      <form className="add-todo__form" onSubmit={(e) => saveFormData(e)}>
        <div className="input-container">
          <label htmlFor="text">{t('todo.text')}: <span className="required">*</span></label>
          <input type="text" id="text" name="text" value={formData.text} onChange={handleChange} />
          {formData.invalid && <ErrorMessage message={t('required')} />}
        </div>
        <div className="input-container">
          <label htmlFor="dueDate">{t('todo.due-date')}:</label>
          <input type="date" id="dueDate" name="dueDate" value={formattedDueDate} onChange={handleChange} />
        </div>
        <input type="submit" value={t('todo.save') ?? ''} className="add-todo__submit" />
      </form>
    </div>
  )
}