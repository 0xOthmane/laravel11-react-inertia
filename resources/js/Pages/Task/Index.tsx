import TasksTable from '@/Components/TasksTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { PaginationProps } from '@/types/pagination';
import { Task } from '@/types/task';
import { Head } from '@inertiajs/react';

export default function Index({
  tasks,
  queryParams,
}: PageProps<{
  tasks: PaginationProps<Task>;
  queryParams: Record<string, string>;
}>) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">Tasks</div>
            {/* <pre>{JSON.stringify(tasks, undefined, 2)}</pre> */}
            <TasksTable tasks={tasks} queryParams={queryParams} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
