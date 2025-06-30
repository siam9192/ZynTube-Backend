import prisma from '../../prisma';
import { IAuthUser } from '../../types';
import { IReactVideoPayload } from './video-reaction.interface';

class VideoReactionService {
  async switchVideoReactionIntoDB(authUser: IAuthUser, payload: IReactVideoPayload) {
    const reactionType = payload.type;
    const userId = authUser.userId;
    const videoId = payload.videoId;

    const existingReaction = await prisma.videoReaction.findUnique({
      where: {
        videoId_userId: {
          videoId,
          userId,
        },
      },
    });

    let message = '';
    let data = null;

    if (reactionType === null) {
      // Remove any existing reaction
      if (existingReaction) {
        data = await prisma.videoReaction.delete({
          where: {
            videoId_userId: {
              videoId,
              userId,
            },
          },
        });
        message = 'Reaction removed';
      } else {
        message = 'No reaction to remove';
      }
    } else if (!existingReaction) {
      // Create new reaction
      data = await prisma.videoReaction.create({
        data: {
          userId,
          videoId,
          type: reactionType,
        },
      });
      message = `Video ${reactionType.toLowerCase()}d`;
    } else if (existingReaction.type === reactionType) {
      // Toggle off (remove existing same reaction)
      data = await prisma.videoReaction.delete({
        where: {
          videoId_userId: {
            videoId,
            userId,
          },
        },
      });
      message = `Video ${reactionType.toLowerCase()} removed`;
    } else {
      // Switch from one reaction type to another
      data = await prisma.videoReaction.update({
        where: {
          videoId_userId: {
            videoId,
            userId,
          },
        },
        data: {
          type: reactionType,
        },
      });
      message = `Video reaction changed to ${reactionType.toLowerCase()}`;
    }

    // Update video likes and dislikes count
    async function nonBlockingProcess(videoId: string) {
      const [likesCount, dislikesCount] = await Promise.all([
        prisma.videoReaction.count({
          where: {
            videoId: payload.videoId,
            type: 'LIKE',
          },
        }),
        prisma.videoReaction.count({
          where: {
            videoId: payload.videoId,
            type: 'DISLIKE',
          },
        }),
      ]);

      await prisma.videoStat.update({
        where: {
          videoId: payload.videoId,
        },
        data: {
          likesCount,
          dislikesCount,
        },
      });
    }
    nonBlockingProcess(payload.videoId).catch((err) =>
      console.error('Failed to update video stats:', err)
    );

    return { message, data };
  }
  async getUserVideoReactionIntoDB(userId: string, videoId: string) {
    const reaction = await prisma.videoReaction.findUnique({
      where: {
        videoId_userId: {
          videoId,
          userId: userId,
        },
      },
      select: {
        type: true, // Only return the reaction type: 'LIKE' | 'DISLIKE'
      },
    });

    return reaction;
  }
}

export default new VideoReactionService();
