import { Project } from './project';
import { UserResource } from './user';

export interface Task {
  id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  priority: string;
  status: string;
  project: Project;
  assigned_user?: UserResource;
  image_path: string;
  createdBy: UserResource;
  updatedBy: UserResource;
}
