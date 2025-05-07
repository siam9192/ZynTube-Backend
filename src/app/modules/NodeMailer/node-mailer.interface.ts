export interface ISendEmailPayload {
  emailAddress: string;
  subject: string;
  path: string;
  data: Record<string, string | number>;
}
