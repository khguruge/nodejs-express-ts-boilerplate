import { InferType } from 'yup';
import { apiSchema } from '../schema/api.schema';

export type APIBodyDTO = InferType<typeof apiSchema>;
