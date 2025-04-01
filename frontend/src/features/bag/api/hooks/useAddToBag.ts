import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useAddToBag = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.addToBag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
    },
  });
};
