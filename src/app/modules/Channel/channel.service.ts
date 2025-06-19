import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';

class ChannelService {
  async checkChannelExistWithUniqueName(name: string) {
    if (!name.startsWith('@')) {
      throw new AppError(httpStatus.BAD_REQUEST, `Unique name must be start with "@"`);
    }
    const channel = await prisma.channel.findUnique({
      where: {
        uniqueName: '@' + name,
      },
    });

    return {
      exist: channel ? true : false,
    };
  }
}

export default new ChannelService();
