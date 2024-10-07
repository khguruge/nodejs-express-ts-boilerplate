import { object, string } from 'yup';

export const apiSchema = object().shape({
  name: string().required(),
});
