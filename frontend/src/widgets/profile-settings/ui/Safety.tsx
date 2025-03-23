import { FC } from 'react';
import { UiButtonDefault } from '../../../shared/button-default';
import { useTotalLogout } from '../../../features/auth/api/hooks/useTotalLogout';


export const Safety: FC = () => {
  const { mutate } = useTotalLogout();
  return (
    <div>
      <UiButtonDefault onCLick={mutate}>Выйти</UiButtonDefault>
    </div>
  );
};
