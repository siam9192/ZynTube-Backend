import { IPaginationOptions } from '../types';
import { paginationOptionKeys } from '../utils/constant';
import Pick from '../utils/pick';

interface IOptionsResult {
  page: number;
  limit: number;
  skip: number;
  sortOrder: 1 | -1;
  sortBy: string;
}
export const calculatePagination = (
  options: IPaginationOptions,
  limitS?: number
): IOptionsResult => {
  const page = Number(options.page) || 1;
  const limit = limitS || Number(options.limit) || 16;
  const sortOrder = options.sortOrder === 'asc' ? 1 : -1;
  const sortBy = options.sortBy || 'createdAt';
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    sortOrder,
    sortBy,
  };
};

export const paginationOptionPicker = (query: any) => Pick(query, paginationOptionKeys);
