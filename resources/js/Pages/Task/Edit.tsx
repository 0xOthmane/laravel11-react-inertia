import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TaskFormData } from '@/types/forms';
import { PaginationProps } from '@/types/pagination';
import { Project } from '@/types/project';
import { Task } from '@/types/task';
import { UserResource } from '@/types/user';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

const Edit = ({
  task,
  projects,
  users,
}: {
  task: Task;
  projects: PaginationProps<Project>;
  users: PaginationProps<UserResource>;
}) => {
  const { data, setData, post, errors } = useForm<TaskFormData>({
    image: null,
    priority: task.priority || '',
    assigned_user_id: task.assignedUser?.id || '',
    project_id: task.project.id || '',
    name: task.name || '',
    status: task.status || '',
    description: task.description || '',
    due_date: task.due_date || '',
    _method: 'PUT',
  } as TaskFormData);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('task.update', task.id));
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Edit Task "{task.name}"
        </h2>
      }
    >
      <Head title="Create new Task" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"
            >
              {task.image_path && (
                <div className="mb-4">
                  <img src={task.image_path} className="w-64" />
                </div>
              )}
              <div>
                <InputLabel htmlFor="task_project_id" value="Project" />
                <SelectInput
                  id="task_project_id"
                  name="project_id"
                  value={data.project_id}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('project_id', e.target.value)}
                >
                  <option value="">Select Project</option>
                  {projects.data.map((project) => (
                    <option value={project.id} key={project.id}>
                      {project.name}
                    </option>
                  ))}
                </SelectInput>
                <InputError message={errors.project_id} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_image_path" value="Task Image" />
                <TextInput
                  id="task_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) =>
                    setData('image', e.target.files ? e.target.files[0] : null)
                  }
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_name" value="Task Name" />
                <TextInput
                  id="task_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused
                  onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="task_description"
                  value="Task Description"
                />
                <TextAreaInput
                  id="task_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_due_date" value="Task Deadline" />
                <TextInput
                  id="task_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('due_date', e.target.value)}
                />
                <InputError message={errors.due_date} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_status" value="Task Status" />
                <SelectInput
                  id="task_status"
                  name="status"
                  value={data.status}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('status', e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="task_priority" value="Task Priority" />
                <SelectInput
                  id="task_priority"
                  name="priority"
                  value={data.priority}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('priority', e.target.value)}
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </SelectInput>
                <InputError message={errors.priority} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="task_assigned_user"
                  value="Assigned User"
                />
                <SelectInput
                  id="task_assigned_user"
                  name="assigned_user"
                  value={data.assigned_user_id}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('assigned_user_id', e.target.value)}
                >
                  <option value="">Select User</option>
                  {users.data.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name}
                    </option>
                  ))}
                </SelectInput>
                <InputError
                  message={errors.assigned_user_id}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route('task.index')}
                  className="round mr-2 inline-block rounded bg-gray-100 px-3 py-1 text-sm text-gray-800 shadow transition-all hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button className="rounded bg-emerald-500 px-3 py-1 text-sm text-white shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
