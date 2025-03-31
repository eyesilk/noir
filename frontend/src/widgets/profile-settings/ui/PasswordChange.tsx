import { FC, useRef } from 'react';
import './change.scss';
import { UiButtonDefault } from '../../../shared/button-default';
import { ChangeProps } from '../model/ChangeProps.type';
import { useModalOutside } from '../../../shared/utils';

export const PasswordChange: FC<ChangeProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOutside(modalRef, () => onClose((prev) => !prev));
  return (
    <div className="change">
      <div className="change__popup" ref={modalRef}>
        <span className="change__title">Изменение пароля</span>
        <form className="change__input-box">
          <label htmlFor="password">Старый пароль</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="new-password">Новый пароль</label>
          <input type="new-password" id="new-password" name="new-password" required />
          <div className="change__buttons">
            <UiButtonDefault type="button" onCLick={() => onClose(false)}>
              Отмена
            </UiButtonDefault>
            <UiButtonDefault color="grey" disabled type="submit">
              Сохранить
            </UiButtonDefault>
          </div>
        </form>
      </div>
    </div>
  );
};
