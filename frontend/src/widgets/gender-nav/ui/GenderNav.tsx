import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './gender-nav.scss';
import { landingMan, landingWoman } from '../../../shared/assets';
import { Link } from 'react-router-dom';

export const GenderNav: FC = () => {
  const genders: { gender: 'Муж' | 'Жен'; imageUrl: string; pos: 'right' | 'left' }[] = [
    { gender: 'Муж', imageUrl: landingMan, pos: 'right' },
    { gender: 'Жен', imageUrl: landingWoman, pos: 'left' },
  ];

  return (
    <nav className="gender-nav">
      <ul className="gender-nav__list">
        {genders.map((gender, index) => (
          <li key={index} className="gender-nav__item">
            <Link to={`/${gender.gender === 'Муж' ? 'man' : 'woman'}/products`}>
              <img src={gender.imageUrl} alt={`${gender.gender}ская одежда`} />
              <span className={`gender-nav__item-title ${gender.pos}`}>
                {gender.gender}ская одежда
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
