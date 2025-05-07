import { model, Schema } from 'mongoose';
import { EUserRole, EUserStatus, IUser } from './user.interface';

const UserModelSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      minlength: 3,
      maxlength: 100,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: Object.values(EUserRole),
      required: true,
    },
    setupStatus:{
      type:Boolean,
      default:false,
    },
    status: {
      type: String,
      enum: Object.values(EUserStatus),
      default: EUserStatus.ACTIVE,
    },
    lastLoginAt: {
      type: Date,
      default:new Date()
    }
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('User', UserModelSchema);

export default User;
