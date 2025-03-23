import { useAddToBag, useBagStore } from '../..';
import { useDecrFromBag } from './useDecrFromBag';
import { useRemoveFromBag } from './useRemoveFromBag';

export const useBagFuncs = () => {
  const { mutateAsync: addToBag, isSuccess: addSuccess, isPending: addPending } = useAddToBag();
  const { mutateAsync: decrFromBag, isSuccess: decrSuccess } = useDecrFromBag();
  const { mutateAsync: remFromBag, isSuccess: removeSuccess } = useRemoveFromBag();
  const isSuccess = addSuccess || decrSuccess || removeSuccess;

  const decrBagProduct = useBagStore((state) => state.decrBagProduct);
  const removeFromBag = useBagStore((state) => state.removeProductFromBag);
  const addProduct = useBagStore((state) => state.addProductToBag);

  const onAdd = async (productId: string, size: string, imageUrl: string, price: number, name: string): Promise<void> => {
    if (addPending) return;
    addProduct({ id: productId, quantity: 1, productId, size, cartId: productId, imageUrl, price, name })
    await addToBag({ productId, size });
  };

  const onDecr = async (productId: string, size: string, quantity: number): Promise<void> => {
    if (quantity > 1) {
      decrBagProduct(productId, size);
    }
    await decrFromBag({ productId, size });
  };

  const onRemove = async (productId: string, size: string): Promise<void> => {
    removeFromBag(productId, size);
    await remFromBag({ productId, size });
  };

  return { onAdd, onDecr, onRemove, isSuccess };
};
