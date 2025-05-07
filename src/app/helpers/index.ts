import { Types } from 'mongoose';

export const objectId = (id: string) => new Types.ObjectId(id);

export function isValidObjectId(id: string) {
  return Types.ObjectId.isValid(id);
}

export function generateSlug(name: string) {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim(); // Remove leading/trailing spaces
}

export function generateTransactionId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let transactionId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    transactionId += characters[randomIndex];
  }
  return transactionId;
}

export function generateNumericOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Random digit 0-9
  }
  return otp;
}

export function generateSecret(length = 20): string {
  let secret = '';
  const source = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * source.length);
    secret += source[randomIndex];
  }

  return secret;
}

export function isNumber(value: string) {
  return !isNaN(parseInt(value));
}
