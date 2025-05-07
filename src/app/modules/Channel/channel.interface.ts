import { Types } from "mongoose";
import { IModelNecessaryFields } from "../../types/model.type";

export interface IChannel extends IModelNecessaryFields{
    user:Types.ObjectId,
    name: string;
    uniqueName: string;
    profilePhotoUrl?: string;
    profileCoverPhotoUrl?: string;
    about?: string;
    count: {
      videos: number;
      subscribers: number;
      views: number;
    };
    status:EChannelStatus;
  }
  
  export type TChannelStatus = `${EChannelStatus}`;
  
  export enum EChannelStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
    SUSPENDED = 'suspended',
  }

