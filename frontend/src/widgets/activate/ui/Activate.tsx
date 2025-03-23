import { FC, useEffect } from 'react';
import { UiDotsLoader } from '../../../shared/dots-loader';
import { useActivate } from '../../../features/auth';
import { useNavigate, useParams } from 'react-router-dom';

export const Activate: FC = () => {
  const params = useParams<{ link: string }>();
  const navigate = useNavigate();
  const { mutateAsync, isSuccess } = useActivate();

  useEffect(() => {
    const fetchActivate = async (link: string) => {
      await mutateAsync(link);
    };

    fetchActivate(params.link!);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      location.reload();
    }
  }, [isSuccess]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UiDotsLoader color="black" />
    </div>
  );
};
