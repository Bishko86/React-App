import { Todo } from './todo.interface';

export interface TodoFormData extends Partial<Todo>{
  todo: string;
  dueDate: number;
  invalid: boolean;
}
