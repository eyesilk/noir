import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useRefetchBag = (isSuccess: boolean) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
    }
  }, [isSuccess]);
};
