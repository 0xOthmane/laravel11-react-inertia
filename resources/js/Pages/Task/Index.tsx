import TasksTable from '@/Components/TasksTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { PaginationProps } from '@/types/pagination';
import { Task } from '@/types/task';
import { Head, Link } from '@inertiajs/react';

export default function Index({
  tasks,
  queryParams,
  success,
}: PageProps<{
  tasks: PaginationProps<Task>;
  queryParams: Record<string, string>;
  success: string;
}>) {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Tasks
          </h2>
          <Link
            href={route('task.create')}
            className="rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Tasks" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">Tasks</div>
            {/* <pre>{JSON.stringify(tasks, undefined, 2)}</pre> */}
            <TasksTable
              tasks={tasks}
              queryParams={queryParams}
              success={success}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
