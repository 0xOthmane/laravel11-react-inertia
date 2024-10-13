import TasksTable from '@/Components/TasksTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PaginationProps } from '@/types/pagination';
import { Task } from '@/types/task';
import { Head } from '@inertiajs/react';

const Show = ({
  task,
  tasks,
  queryParams,
  success,
}: {
  task: Task;
  tasks: PaginationProps<Task>;
  queryParams: Record<string, string>;
  success: string;
}) => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Task ${task.name}`}
        </h2>
      }
    >
      <Head title={`Task ${task.name}`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div>
              <img
                src={task.image_path}
                className="h-64 w-full object-cover"
                alt=""
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div>
                  <div>
                    <label className="text-lg font-bold">Task ID</label>
                    <p className="mt-1">{task.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Task Name</label>
                    <p className="mt-1">{task.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Task Status</label>
                    <p className="mt-1">
                      <span
                        className={cn(
                          'rounded px-3 py-1 text-white',
                          TASK_STATUS_CLASS_MAP[task.status],
                        )}
                      >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Created By</label>
                    <p className="mt-1">{task.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Due Date</label>
                    <p className="mt-1">{task.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Created At</label>
                    <p className="mt-1">{task.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="text-lg font-bold">Updated By</label>
                    <p className="mt-1">{task.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-lg font-bold">Task Description</label>
                <p className="mt-1">{task.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                success={success}
                hideProjectColumn
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
