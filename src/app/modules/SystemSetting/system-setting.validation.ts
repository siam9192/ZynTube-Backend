import { z } from 'zod';

const updateSetting = z
  .object({
    maxBorrowDays: z.number().min(1, 'Max borrow days must be at least 1.'),
    maxBorrowItems: z.number().min(1, 'Max borrow items must be at least 1.'),
    lateFeePerDay: z.number().min(0, 'Late fee per day cannot be negative.'),
    reservationExpiryDays: z.number().min(1, 'Reservation expiry must be at least 1 day.'),
    studentRegistrationRequestExpiryDays: z
      .number()
      .min(1, 'Student registration expiry must be at least 1 day.'),
    managementRegistrationRequestExpiryDays: z
      .number()
      .min(1, 'Management registration expiry must be at least 1 day.'),
    emailVerificationExpiryMinutes: z
      .number()
      .min(1, 'Email verification expiry must be at least 1 minute.'),
  })
  .partial();

export default {
  updateSetting,
};
