export interface ICreateVideoCommentPayload {
  parentId?: string;
  videoId: string;
  content: string;
}

export enum EVideoCommentFilterType {
  OWN = 'own',
  TOP = 'top',
  RELEVANT = 'relevant',
  ALL = 'all',
  MEMBER = 'member',
}
