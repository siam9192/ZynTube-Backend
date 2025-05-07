import AppError from "../../Errors/AppError";
import httpStatus from "../../shared/http-status";
import { EUserRole, IGoogleUser } from "../User/user.interface";
import User from "../User/user.model";



class AuthService {
  async googleCallback(payload: { accessToken: string }) {
    const userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';
  
    const response = await fetch(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`,
      },
    });
  
    if (!response.ok) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch Google user info');
    }
  
    const userData: IGoogleUser = await response.json();
  
    const existingUser = await User.findOne({ email: userData.email });
  
    if (existingUser) {
      await User.updateOne(
        { email: userData.email },
        { lastLoginAt: new Date() }
      );
    } else {
      const newUser = await User.create({
        email: userData.email,
        role: EUserRole.USER,
        lastLoginAt: new Date(),
      });
  
      if (!newUser) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create user');
      }
    }
  }
}

export default new AuthService();
