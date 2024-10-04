import { cn } from '@/lib/utils';
import { MetaLink } from '@/types/pagination';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }: { links: MetaLink[] }) {
  return (
    <nav className="mt-4 text-center">
      {links.map((link) => (
        <Link
          preserveScroll
          className={cn(
            'inline-block rounded-lg px-3 py-2 text-xs text-gray-200',
            link.active && 'bg-gray-950',
            !link.url
              ? 'cursor-not-allowed text-gray-500'
              : 'hover:bg-gray-950',
          )}
          dangerouslySetInnerHTML={{ __html: link.label }}
          href={link.url!}
          key={link.label}
        />
      ))}
    </nav>
  );
}
