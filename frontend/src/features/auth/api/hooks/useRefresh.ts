import { useQuery } from '@tanstack/react-query';
import AuthApi from '../authApi';

export const useRefresh = () => {
  return useQuery({
    queryKey: ['refresh-token'],
    queryFn: AuthApi.refreshToken,
    refetchInterval: 900000,
    refetchOnWindowFocus: false,
  });
};
