import { Types } from 'mongoose';
import { IModelNecessaryFields, TGender, TSemester } from './types/model.type';
import { TShift } from './modules/Student/student.interface';

export interface IUser extends IModelNecessaryFields {
  email: string;
  roll?: number;
  password: string;
  role: TUserRole;
  status: TUserStatus;
  isDeleted: boolean;
  lastLoginAt?: Date;
}

export interface IEmailVerificationRequest extends IModelNecessaryFields {
  email: string;
  otp: string;
  otpResendCount: number;
  expireAt: Date;
  status: TEmailVerificationRequestStatus;
}

export type TEmailVerificationRequestStatus = `${EEmailVerificationRequestStatus}`;

export enum EEmailVerificationRequestStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  EXPIRED = 'expired',
}

export interface IStudentRegistrationRequest extends IModelNecessaryFields {
  fullName: string;
  gender: TGender;
  roll: number;
  email: string;
  department: string;
  semester: TSemester;
  shift: TShift;
  session: string;
  password: string;
  isEmailVerified: boolean;
  expireAt: Date;
  status: TStudentRegistrationRequestStatus;
  reasonForReject?: string;
  index: number;
}

export type TStudentRegistrationRequestStatus = `${EStudentRegistrationRequestStatus}`;

export enum EStudentRegistrationRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export interface IStudent extends IModelNecessaryFields {
  user: Types.ObjectId | IUser;
  fullName: string;
  roll: number;
  gender: TGender;
  profilePhotoUrl: string;
  department: Types.ObjectId;
  currentSemester: number;
  shift: TShift;
  session: string;
  phoneNumber?: string;
  address?: TUserAddress;
  reputationIndex: number;
}

export interface ILibrarian extends IModelNecessaryFields {
  user: Types.ObjectId | IUser;
  fullName: string;
  gender: TGender;
  profilePhotoUrl: string;
  about: string;
  contactInfo: TContactInfo;
  permissions: TLibrarianPermissions;
}

type Permission = {
  read: boolean;
  write: boolean;
  delete: boolean;
};

export type TLibrarianPermissions = {
  books: Permission;
  users: Permission;
  librarians: Permission;
  admins: Permission;
  settings: Permission;
  reports: Permission;
};

type TContactInfo = {
  emailAddress: string;
  phoneNumber: string;
};

export interface IAdministrator {
  user: Types.ObjectId | IUser;
  fullName: string;
  gender: TGender;
  profilePhotoUrl: string;
  about: string;
  contactInfo: TContactInfo;
  permissions: TAdministratorPermissions;
}

export type TAdministratorPermissions = {
  canConfigureSystem: boolean;
  canManageUsers: boolean;
  canAuditLogs: boolean;
};

export type TUserRole = `${EUserRole}`;

export enum EUserRole {
  STUDENT = 'student',
  LIBRARIAN = 'librarian',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superadmin',
}

export type TUserStatus = `${EUserStatus}`;
export enum EUserStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
}

export interface IBook {
  _id: Types.ObjectId;
  name: string;
  coverPhotoUrl: string;
  genres: Types.ObjectId[];
  author: Types.ObjectId;
  totalCopies: number;
  availableCopies: number;
  avgRating: number;
  reviewCount: number;
  wishListedCount: number;
  exceptedAvailableDate?: Date;
  status: TBookStatus;
  deleted: boolean;
}

export interface IBookCopies extends IModelNecessaryFields {
  book: Types.ObjectId;
  status: TBookCopyStatus;
  shelfLocation: string;
  condition: TCopyConditionStatus;
}

type TCopyConditionStatus = `${ECopyConditionStatus}`;

enum ECopyConditionStatus {
  Good = 'good',
  FAIR = 'fair',
  POOR = 'poor',
}

type TBookCopyStatus = `${EBookCopyStatus}`;

enum EBookCopyStatus {
  AVAILABLE = 'available',
  CHECKED_OUT = 'checked_out',
  RESERVED = 'reserved',
  Lost = 'lost',
  DAMAGED = 'damaged',
  DISCARDED = 'discarded',
}

type TBookStatus = `${EBookStatus}`;

export enum EBookStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export interface IBorrowRequest {
  _id: Types.ObjectId;
  student: Types.ObjectId;
  book: Types.ObjectId;
  borrowForDays: number;
  rejectedFor?: string;
  expireAt: Date;
  status: TBorrowRequestStatus;
}

export type TBorrowRequestStatus = `${EBorrowRequestStatus}`;

export enum EBorrowRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCELED = 'canceled',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export interface IReservation {
  id: Types.ObjectId;
  student: Types.ObjectId;
  book: Types.ObjectId;
  reservationDate: Date;
  expiryDate: Date;
  status: TReservationStatus;
  qrCode: string;
}

type TReservationStatus = `${EReservationStatus}`;

export enum EReservationStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  CANCELED = 'canceled',
}

export interface IBorrowRecord {
  request: Types.ObjectId;
  book: Types.ObjectId;
  student: Types.ObjectId;
  dueDate: Types.ObjectId;
  returnDate: Types.ObjectId | null;
}

export enum EBorrowRecordEnum {
  ACTIVE = 'active',
  RETURNED = 'returned',
  OVERDUE = 'overdue',
  LOST = 'Lost',
}

export interface IFine {
  id: Types.ObjectId;
  student: Types.ObjectId;
  borrow: Types.ObjectId;
  amount: number;
  reason: TFineReason;
  status: TFineStatus;
  issuedDate: Date;
  paidDate: Date | null;
}

export type TFineReason = `${EFineReason}`;

export enum EFineReason {
  LATE_RETURN = 'late return',
  LOST = 'lost',
  DAMAGED = 'damaged',
}

type TFineStatus = `${EFineStatus}`;
export enum EFineStatus {
  UNPAID = 'unpaid',
  PAID = 'paid',
  waived = 'waived',
}

export interface IBookReview extends IModelNecessaryFields {
  borrow: Date;
  student: Date;
  rating: number;
}

export interface INotification extends IModelNecessaryFields {
  student: Types.ObjectId;
  type: TNotificationType;
  message: string;
  isRead: boolean;
}

type TNotificationType = `${ENotificationType}`;

export enum ENotificationType {
  DUE_REMINDER = 'due reminder',
  AVAILABILITY = 'availability',
  RESERVATION = 'reservation',
  FINE = 'fine',
}

export interface ISystemSetting extends IModelNecessaryFields {
  maxBorrowDays: number;
  maxBorrowItems: number;
  lateFeePerDay: number;
  reservationExpiryDays: number;
  studentRegistrationRequestExpiryDays: number;
  managementRegistrationRequestExpiryDays: number;
  emailVerificationExpiryMinutes: number;
  isActive: boolean;
}

export type TUserAddress = {
  present?: TAddress;
  permanent?: TAddress;
  currentIsPresent?: boolean;
};

export type TAddress = {
  street: string;
  city: string;
  district: string;
  country: string;
};

export interface IAuthor extends IModelNecessaryFields {
  _id: Types.ObjectId;
  name: string;
  photoUrl: string;
  biography: string;
  followersCount: number;
  status: TAuthorStatus;
}

export type TAuthorStatus = `${EAuthorStatus}`;

export enum EAuthorStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface IFollow extends IModelNecessaryFields {
  student: Types.ObjectId;
  author: Types.ObjectId;
}

export interface IAuditLogs extends IModelNecessaryFields {
  action: string;
  performedBy: Types.ObjectId;
  targetUser: Types.ObjectId;
}
