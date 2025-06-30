import { IPaginationOptions } from '../types';
import { paginationOptionKeys } from '../utils/constant';
import Pick from '../utils/pick';

interface IOptionsResult {
  page: number;
  limit: number;
  skip: number;
  sortOrder: string;
  sortBy: string;
}
export const calculatePagination = (
  options: IPaginationOptions,
  setting?: {
    limit?: number;
    sortFields?: string[];
    defaultSortField?: string;
  }
): IOptionsResult => {
  const page = Number(options.page) || 1;
  const limit = setting?.limit || Number(options.limit) || 16;
  const sortOrder = options.sortOrder || 'asc';
  const defaultSortField = setting?.defaultSortField;
  const optionSortBy = options.sortBy;
  const sortBy =
    optionSortBy && defaultSortField?.includes(optionSortBy)
      ? optionSortBy
      : defaultSortField || 'createdAt';

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
