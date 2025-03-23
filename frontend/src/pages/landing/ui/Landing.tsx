import { FC } from 'react';
import { WidgetWelcomes } from '../../../widgets/welcomes';
import './landing.scss';
import '../../../shared/assets/ui/styles/visually-hidden.scss';
import { WidgetBrandsNav } from '../../../widgets/brands-nav';
import { WidgetGenderNav } from '../../../widgets/gender-nav';
import { WidgetDescription } from '../../../widgets/description';

export const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="landing__wrapper">
        <h1 className="visually-hidden">Noir - пространство авангардной моды.</h1>
        <WidgetGenderNav />
        <WidgetBrandsNav />
        <WidgetWelcomes />
        <WidgetDescription />
      </div>
    </div>
  );
};
