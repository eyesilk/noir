import { FC, useEffect, useState } from 'react';
import { useAuthStore } from '../../../features/auth';
import './profile-settings.scss';
import { ButtonGray } from '../../../shared/button-gray/ui/ButtonGray';
import { Favorites } from './Favorites';
import { Safety } from './Safety';
import { useNavigate } from 'react-router-dom';

export const ProfileSettings: FC = () => {
  const userData = useAuthStore((state) => state.userData);
  const tabs: string[] = ['Избранное', 'Безопасность'];
  const [selectedTab, setSelectedTab] = useState<string>('Избранное');
  const navigate = useNavigate();
  const isAuthed = useAuthStore((state) => state.isAuthed);

  useEffect(() => {
    if (!isAuthed) {
      navigate('/');
      location.reload()
    }
  }, [isAuthed]);
  return (
    <div className="profile limits">
      <span className="profile__welcomes">Привет, {userData?.username}</span>
      <section className="profile__section">
        <ul className="profile__tabs">
          {tabs.map((tab, index) => (
            <li key={index}>
              <ButtonGray onClick={() => setSelectedTab(tab)} active={selectedTab === tab}>
                {tab}
              </ButtonGray>
            </li>
          ))}
        </ul>
        {selectedTab === 'Избранное' && <Favorites />}
        {selectedTab === 'Безопасность' && <Safety />}
      </section>
    </div>
  );
};
