import { useMutation } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useAddToBag = () => {
  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.addToBag,
  });
};
