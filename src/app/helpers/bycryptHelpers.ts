import bcrypt from 'bcrypt';

export const hash = async (data: string) => {
  return await bcrypt.hash(data, Number(10));
};

export const compare = async (data: string, hashedData: string) => {
  return await bcrypt.compare(data, hashedData);
};

export default {
  hash,
  compare,
};
