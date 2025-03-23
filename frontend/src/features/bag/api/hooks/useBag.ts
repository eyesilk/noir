import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useBag = () => {
  return useQuery({
    queryKey: ['bag-products'],
    queryFn: BagApi.getBag,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
