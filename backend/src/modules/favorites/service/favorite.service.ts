import ApiError from '@/exceptions/api-error';
import prisma from '@/lib/prisma';
import findAndCheckUser from '@/utils/findAndCheckUser,';
import { Favorite, FavoriteItem, User } from '@prisma/client';
import findFavorite from '../lib/findFavorite';

class FavoriteService {
  async getFavorite(userId: string): Promise<Favorite> {
    const user: User = await findAndCheckUser(userId);
    const favorite: Favorite | null = await prisma.favorite.findUnique({
      where: {
        userId: user.id,
      },
      include: { favoriteItems: true },
    });
    if (!favorite) {
      throw ApiError.BadRequest('Избранные не найдены');
    }
    return favorite;
  }

  async addFavoriteItem(productId: string, userId: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    let favorite: Favorite | null;
    favorite = await prisma.favorite.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (!favorite) {
      favorite = await prisma.favorite.create({
        data: {
          userId: user.id,
        },
      });
    }
    const favoriteItem: FavoriteItem | null = await prisma.favoriteItem.findFirst({
      where: {
        productId,
        favoriteId: favorite.id,
      },
    });
    if (favoriteItem) {
      throw ApiError.BadRequest('Товар уже добавлен в избранные');
    }
    await prisma.favoriteItem.create({
      data: {
        productId,
        favoriteId: favorite.id,
      },
    });

    return;
  }

  async removeFavoriteItem(productId: string, userId: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    const favorite: Favorite = await findFavorite(user.id);

    const favoriteItem: FavoriteItem | null = await prisma.favoriteItem.findFirst({
      where: {
        productId,
        favoriteId: favorite.id,
      },
    });
    if (!favoriteItem) {
      throw ApiError.BadRequest('Избранный товар не найдены');
    }

    await prisma.favoriteItem.delete({
      where: {
        id: favoriteItem.id,
      },
    });

    return;
  }

  async clearFavorite(userId: string): Promise<void> {
    const user: User = await findAndCheckUser(userId);
    const favorite: Favorite = await findFavorite(user.id);

    await prisma.favoriteItem.deleteMany({
      where: {
        favoriteId: favorite.id,
      },
    });

    return;
  }
}

const favoriteService = new FavoriteService();

export default favoriteService;
