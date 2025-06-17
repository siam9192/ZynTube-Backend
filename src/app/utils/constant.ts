import { UserRole } from '../generated/prisma';

export const paginationOptionKeys = ['page', 'limit', 'sortBy', 'sortOrder'];

export const allStatus = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  PAUSED: 'Paused',
  DELETED: 'Deleted',
  PENDING: 'Pending',
  APPROVED: 'Approved',
  HANDED_OVER: 'Handed_Over',
  HAND_OVER_FAILED: 'Hand_Over_Failed',
  CANCELLED: 'Canceled',
  EXPIRED: 'Expired',
  RETURNED: 'Returned',
  REJECTED: 'Rejected',
};

export const ALL_USER = Object.values(UserRole);
