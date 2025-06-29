export interface IGoogleUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
  given_name: string;
  family_name: string;
}

export interface ISetupUserProfilePayload {
  channelName: string;
  channelUniqueName: string;
  channelProfilePhotoUrl: string;
}

export interface IUpdateUserProfilePayload {
  channelName?: string;
  channelUniqueName?: string;
  channelProfilePhotoUrl?: string;
  channelProfileCoverPhotoUrl?: string;
  channelAbout?: string;
}
