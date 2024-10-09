import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Project } from '@/types/project';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

interface FormData {
  image: File | null; // Allow image to be a File or null
  name: string;
  status: string;
  description: string;
  due_date: string;
  _method: string;
}
const Edit = ({ project }: { project: Project }) => {
  console.log(project);
  const { data, setData, post, errors } = useForm<FormData>({
    image: null,
    name: project.name || '',
    status: project.status || '',
    description: project.description || '',
    due_date: project.due_date || '',
    _method: 'PUT',
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('project.update', project.id));
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Edit Project "{project.name}"
        </h2>
      }
    >
      <Head title="Create new Project" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8"
            >
              {project.image_path && (
                <div className="mb-4">
                  <img src={project.image_path} className="w-64" />
                </div>
              )}
              <div>
                <InputLabel
                  htmlFor="project_image_path"
                  value="Project Image"
                />
                <TextInput
                  id="project_image_path"
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
                <InputLabel htmlFor="project_name" value="Project Name" />
                <TextInput
                  id="project_name"
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
                  htmlFor="project_description"
                  value="Project Description"
                />
                <TextAreaInput
                  id="project_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="project_due_date"
                  value="Project Due Date"
                />
                <TextInput
                  id="project_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('due_date', e.target.value)}
                />
                <InputError message={errors.due_date} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="project_status" value="Project Status" />
                <SelectInput
                  id="project_status"
                  name="status"
                  value={project.status}
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
              <div className="mt-4 text-right">
                <Link
                  href={route('project.index')}
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
