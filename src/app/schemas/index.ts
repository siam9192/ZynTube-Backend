import { Schema } from 'mongoose';
import { TContactInfo, TPermission } from '../types';

const AddressSchema = new Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
); // No separate _id for subdocument

export const UserAddressSchema = new Schema({
  present: { type: AddressSchema, required: false },
  permanent: { type: AddressSchema, required: false },
  currentIsPresent: { type: Boolean, default: false },
});

export const ContactInfoSchema = new Schema<TContactInfo>({
  emailAddress: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  phoneNumber: {
    type: String,
    minLength: 3,
    maxLength: 11,
    required: true,
  },
});

export const PermissionSchema = new Schema<TPermission>({
  read: {
    type: Boolean,
    required: true,
  },
  write: {
    type: Boolean,
    required: true,
  },
  delete: {
    type: Boolean,
    required: true,
  },
});
