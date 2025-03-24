import { User } from '../model/types/user.type';
import { useAuthStore } from '../model/useAuthStore';
import { useRefresh } from './hooks/useRefresh';

export const getUser = (): void => {
  let userData: User | null;

  const setUserData = useAuthStore((state) => state.setUserData);
  const data = sessionStorage.getItem('user');
  userData = data ? JSON.parse(data) : null;
  if (!userData) {
    const refreshToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('refreshToken='))
      ?.split('=')[1]; 

    if (refreshToken) {
      const { data: userSaveData } = useRefresh();  
      userData = userSaveData?.user!;
    }
  }

  setUserData(userData);
};
