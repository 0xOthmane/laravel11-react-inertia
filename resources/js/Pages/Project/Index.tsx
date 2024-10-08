import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PageProps } from '@/types';
import { PaginationProps } from '@/types/pagination';
import { Project } from '@/types/project';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({
  projects,
  queryParams,
}: PageProps<
  { projects: PaginationProps<Project> } & {
    queryParams: Record<string, string>;
  }
>) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name: string, value: string) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    console.log(queryParams);
    router.get(route('project.index', queryParams));
  };

  const onKeyPress = (
    name: string,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key !== 'Enter') return;
    searchFieldChanged(name, e.currentTarget.value);
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">Projects</div>
            {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-nowrap">
                  <th className="px-3 py-2">ID</th>
                  <th className="px-3 py-2">Image</th>
                  <th className="px-3 py-2">
                    <TextInput
                      className="w-full"
                      defaultValue={queryParams.name}
                      placeholder="Project name"
                      onBlur={(e) => searchFieldChanged('name', e.target.value)}
                      onKeyDown={(e) => onKeyPress('name', e)}
                    />
                  </th>
                  <th className="px-3 py-2">
                    <SelectInput
                      className="w-full"
                      defaultValue={queryParams.status}
                      onChange={(e) =>
                        searchFieldChanged('status', e.target.value)
                      }
                    >
                      <option value="">Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </SelectInput>
                  </th>
                  <th className="px-3 py-2">Created At</th>
                  <th className="px-3 py-2">Due Date</th>
                  <th className="px-3 py-2">Created By</th>
                  <th className="px-3 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.data.map((project) => (
                  <tr
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={project.id}
                  >
                    <td className="px-3 py-2">{project.id}</td>
                    <td className="px-3 py-2">
                      <img src={project.image_path} alt="" className="w-16" />
                    </td>
                    <td className="px-3 py-2">{project.name}</td>
                    <td className="px-3 py-2">
                      <span
                        className={cn(
                          'rounded px-3 py-1 text-white',
                          PROJECT_STATUS_CLASS_MAP[project.status],
                        )}
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </td>
                    <td className="text-nowrap px-3 py-2">
                      {project.created_at}
                    </td>
                    <td className="text-nowrap px-3 py-2">
                      {project.due_date}
                    </td>
                    <td className="px-3 py-2">{project.createdBy.name}</td>
                    <td className="px-3 py-2">
                      <Link
                        href={route('project.edit', project.id)}
                        className="mx-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                      <Link
                        href={route('project.destroy', project.id)}
                        className="mx-1 font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination links={projects.meta.links} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
