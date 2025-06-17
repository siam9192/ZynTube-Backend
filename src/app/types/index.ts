import e from 'express';
import { EUserRole } from '../type';
import { UserRole } from '../generated/prisma';

export interface IFbDataResponse {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      height: number;
      width: number;
      url: string;
    };
  };
}

export type TEnvironment = `${EEnvironment}`;

export enum EEnvironment {
  Development = 'DEVELOPMENT',
  Production = 'Production',
}

export interface IPaginationOptions {
  page?: string | number;
  limit?: number;
  sortBy?: string | undefined;
  sortOrder?: string;
}

export interface IAuthUser {
  userId: string;
  sessionId: string;
  profileId: string;
  role: UserRole;
}
export type TBookPermission = {
  canAdd: boolean;
  canUpdate: boolean;
  canView: boolean;
  canDelete: boolean;
};

export type TUserPermission = {
  student: {
    canView: boolean;
    canUpdateStatus: boolean;
    canDelete: boolean;
  };
  librarian: {
    canView: boolean;
    canUpdateStatus: boolean;
    canDelete: boolean;
  };
  administrator: {
    canView: boolean;
    canUpdateStatus: boolean;
    canDelete: boolean;
  };
};

export type TStudentRegistrationRequestPermission = {
  canView: boolean;
  canApprove: boolean;
  canReject: boolean;
};

export type TBorrowRequestPermission = {
  canView: boolean;
  canApprove: boolean;
  canReject: boolean;
};

export type TBorrowPermission = {
  canView: boolean;
  canApprove: boolean;
  canReject: boolean;
};

export type TReservationPermission = {
  canView: boolean;
  canProcess: boolean;
  canUpdateExpireDate: boolean;
};

export type TFinePermission = {
  canView: boolean;
  canProcess: boolean;
  canWave: boolean;
};

export type TPermission = {
  read: boolean;
  write: boolean;
  update: boolean;
  delete: boolean;
};

export type TContactInfo = {
  emailAddress: string;
  phoneNumber: string;
};
