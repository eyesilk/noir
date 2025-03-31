import { FC, useRef } from 'react';
import './change.scss';
import { UiButtonDefault } from '../../../shared/button-default';
import { ChangeProps } from '../model/ChangeProps.type';
import { useModalOutside } from '../../../shared/utils';

export const UsernameChange: FC<ChangeProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOutside(modalRef, () => onClose((prev) => !prev));
  return (
    <div className="change">
      <div className="change__popup" ref={modalRef}>
        <span className="change__title">Изменение имени</span>
        <form className="change__input-box">
          <label htmlFor="username">Новое имя</label>
          <input type="username" id="username" name="username" required />
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
