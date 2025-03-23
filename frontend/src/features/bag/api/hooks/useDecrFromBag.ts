import { useMutation } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useDecrFromBag = () => {
  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.decrFromBag,
  });
};
