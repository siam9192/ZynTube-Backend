import mongoose, { Schema, Document } from 'mongoose';
import { ISystemSetting } from './system-setting.interface';

const SystemSettingModelSchema: Schema = new Schema<ISystemSetting>(
  {
    maxBorrowDays: { type: Number, required: true },
    maxBorrowItems: { type: Number, required: true },
    lateFeePerDay: { type: Number, required: true },
    reservationExpiryDays: { type: Number, required: true },
    studentRegistrationRequestExpiryDays: { type: Number, required: true },
    managementRegistrationRequestExpiryDays: { type: Number, required: true },
    emailVerificationExpiryMinutes: { type: Number, required: true },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const SystemSetting = mongoose.model<ISystemSetting>(
  'SystemSetting',
  SystemSettingModelSchema
);
