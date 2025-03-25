import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useBag = (isEnabled: boolean) => {
  return useQuery({
    queryKey: ['bag-products'],
    queryFn: BagApi.getBag,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    enabled: isEnabled,
  });
};
