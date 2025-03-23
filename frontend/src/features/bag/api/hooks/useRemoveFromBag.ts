import { useMutation } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useRemoveFromBag = () => {
  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.removeFromBag,
  });
};
