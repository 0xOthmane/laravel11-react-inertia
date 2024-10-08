import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import { PropsWithChildren } from 'react';

const TableHeading = ({
  children,
  name,
  sortable = true,
  sort_field,
  sort_direction,
  sortChanged,
}: PropsWithChildren<{
  name: string;
  sortable?: boolean;
  sort_field: string;
  sort_direction: string;
  sortChanged: (field: string) => void;
}>) => {
  return (
    <th onClick={() => sortChanged(name)}>
      <div className="flex cursor-pointer items-center justify-between gap-1 px-3 py-2">
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon
              className={cn(
                'w-4',
                sort_field === name && sort_direction === 'asc' && 'text-white',
              )}
            />
            <ChevronDownIcon
              className={cn(
                '-mt-2 w-4',
                sort_field === name &&
                  sort_direction === 'desc' &&
                  'text-white',
              )}
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default TableHeading;
