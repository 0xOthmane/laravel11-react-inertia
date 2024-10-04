import { UserResource } from './user';

export interface Project {
  id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  status: string;
  image_path: string;
  createdBy: UserResource;
  updatedBy: UserResource;
}
