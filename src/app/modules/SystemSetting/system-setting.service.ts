import { ISystemSetting, IUpdateSystemSettingPayload } from './system-setting.interface';
import { SystemSetting } from './system-setting.model';

class SystemSettingService {
  async initSettings() {
    const setting = await SystemSetting.findOne({ isActive: true });
    // Create new setting if active setting not exist
    if (!setting) {
      return await SystemSetting.create({
        maxBorrowDays: 15,
        maxBorrowItems: 2,
        lateFeePerDay: 10,
        reservationExpiryDays: 7,
        studentRegistrationRequestExpiryDays: 15,
        managementRegistrationRequestExpiryDays: 15,
        emailVerificationExpiryMinutes: 10,
        isActive: true,
      });
    }
  }
  async getCurrentSettings() {
    // Fetch current settings  setting if active setting not exist then create new and return it
    const settings = (await SystemSetting.findOne({ isActive: true })) || this.initSettings();
    return settings as ISystemSetting;
  }

  async updateSystemSetting(payload: IUpdateSystemSettingPayload) {
    return await SystemSetting.findOneAndUpdate({ isActive: true }, payload, { new: true });
  }
}

export default new SystemSettingService();
