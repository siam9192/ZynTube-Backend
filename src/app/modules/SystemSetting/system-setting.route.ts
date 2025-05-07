import { Router } from 'express';
import systemSettingController from './system-setting.controller';
import validateRequest from '../../middlewares/validateRequest';
import systemSettingValidation from './system-setting.validation';

const router = Router();

router.get('/', systemSettingController.getCurrentSystemSetting);

router.put(
  '/',
  validateRequest(systemSettingValidation.updateSetting),
  systemSettingController.updateSystemSetting
);

const systemSettingRouter = router;

export default systemSettingRouter;
