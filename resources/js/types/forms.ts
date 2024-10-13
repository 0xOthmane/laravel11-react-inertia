export interface ProjectFormData {
  image: File | null; // Allow image to be a File or null
  name: string;
  status: string;
  description: string;
  due_date: string;
  _method?: string;
}

export interface TaskFormData {
  image: File | null; // Allow image to be a File or null
  name: string;
  description: string;
  status: string;
  priority: string;
  assigned_user_id: string;
  project_id: string;
  due_date: string;
  _method?: string;
}
