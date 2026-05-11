export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
  timestamp?: Date;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

export interface PageRequest {
  page: number;
  size: number;
  sort?: string;
  direction?: 'ASC' | 'DESC';
}
