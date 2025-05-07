import { Document } from 'mongoose';
import { IModelNecessaryFields } from '../../types/model.type';

export interface IUser extends IModelNecessaryFields {
  email: string;
  role:EUserRole
  setupStatus:boolean
  lastLoginAt: Date;
  status: EUserStatus;
}

export enum EUserRole {
 USER = 'user'
}

export enum EUserStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  DELETED = 'deleted',
}


export interface IGoogleUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
  given_name: string;
  family_name: string;
}
