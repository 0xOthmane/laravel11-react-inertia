export interface PaginationProps<T> {
  data: T[];
  links: Links;
  meta: Meta;
}

export interface Links {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface MetaLink {
  url?: string;
  label: string;
  active: boolean;
}
