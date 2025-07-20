import prisma from '../../prisma';
import { IAuthUser } from '../../types';
import { IReactVideoCommentPayload } from './video-comment-reaction.intreface';

class VideoCommentReactionService {
  async switchReactionIntoDB(authUser: IAuthUser, payload: IReactVideoCommentPayload) {
    const reactionType = payload.type;
    const userId = authUser.userId;
    const commentId = payload.commentId;

    const existingReaction = await prisma.videoCommentReaction.findUnique({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
    });

    let message = '';
    let data = null;

    if (reactionType === null) {
      // Remove any existing reaction
      if (existingReaction) {
        data = await prisma.videoCommentReaction.delete({
          where: {
            commentId_userId: {
              commentId,
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
      data = await prisma.videoCommentReaction.create({
        data: {
          userId,
          commentId,
          type: reactionType,
        },
      });
      message = `Comment  ${reactionType.toLowerCase()}d`;
    } else if (existingReaction.type === reactionType) {
      // Toggle off (remove existing same reaction)
      data = await prisma.videoCommentReaction.delete({
        where: {
          commentId_userId: {
            commentId,
            userId,
          },
        },
      });
      message = `Video ${reactionType.toLowerCase()} removed`;
    } else {
      // Switch from one reaction type to another
      data = await prisma.videoCommentReaction.update({
        where: {
          commentId_userId: {
            commentId,
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
        prisma.videoCommentReaction.count({
          where: {
            commentId: payload.commentId,
            type: 'LIKE',
          },
        }),
        prisma.videoCommentReaction.count({
          where: {
            commentId,
            type: 'DISLIKE',
          },
        }),
      ]);

      await prisma.videoComment.update({
        where: {
          id: commentId,
        },
        data: {
          likesCount,
          dislikesCount,
        },
      });
    }
    nonBlockingProcess(payload.commentId).catch((err) =>
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

export default new VideoCommentReactionService();
