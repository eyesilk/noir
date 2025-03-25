import { debounce } from 'lodash';
import { useAddToBag, useBagStore } from '../..';
import { useDecrFromBag } from './useDecrFromBag';
import { useRemoveFromBag } from './useRemoveFromBag';

export const useBagFuncs = () => {
  const { mutateAsync: addToBag, isSuccess: addSuccess } = useAddToBag();
  const { mutateAsync: decrFromBag, isSuccess: decrSuccess } = useDecrFromBag();
  const { mutateAsync: remFromBag, isSuccess: removeSuccess } = useRemoveFromBag();
  const isSuccess = addSuccess || decrSuccess || removeSuccess;

  const decrBagProduct = useBagStore((state) => state.decrBagProduct);
  const removeFromBag = useBagStore((state) => state.removeProductFromBag);
  const addProduct = useBagStore((state) => state.addProductToBag);

  const onAdd = debounce(async (productId: string, size: string, imageUrl: string, price: number, name: string): Promise<void> => {
    addProduct({ id: productId, quantity: 1, productId, size, cartId: productId, imageUrl, price, name })
    await addToBag({ productId, size });
  }, 200);

  const onDecr = debounce( async (productId: string, size: string, quantity: number): Promise<void> => {
    if (quantity > 1) {
      decrBagProduct(productId, size);
    }
    await decrFromBag({ productId, size });
  }, 200);

  const onRemove = debounce( async (productId: string, size: string): Promise<void> => {
    removeFromBag(productId, size);
    await remFromBag({ productId, size });
  }, 200);

  return { onAdd, onDecr, onRemove, isSuccess };
};
