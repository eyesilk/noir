import { FC, lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layout';
import { PageLoading } from '../../pages/loading';
import { useAuthStore, useRefresh } from '../../features/auth';
import { useTotalLogout } from '../../features/auth/api/hooks/useTotalLogout';

const PageLanding = lazy(() =>
  import('../../pages/landing').then((module) => ({ default: module.PageLanding })),
);
const PageBrands = lazy(() =>
  import('../../pages/brands').then((module) => ({ default: module.PageBrands })),
);
const PageBrandProducts = lazy(() =>
  import('../../pages/brand-products').then((module) => ({ default: module.PageBrandProducts })),
);
const PageProducts = lazy(() =>
  import('../../pages/products').then((module) => ({ default: module.PageProducts })),
);
const PageProduct = lazy(() =>
  import('../../pages/product').then((module) => ({ default: module.PageProduct })),
);
const PageProfile = lazy(() =>
  import('../../pages/profile').then((module) => ({ default: module.PageProfile })),
);
const PageNotFound = lazy(() =>
  import('../../pages/not-found').then((module) => ({ default: module.PageNotFound })),
);
const PageActivate = lazy(() =>
  import('../../widgets/activate').then((module) => ({ default: module.WidgetActivate })),
);

export const AppRouter: FC = () => {

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PageLanding />} />
          <Route path="/brands" element={<PageBrands />} />
          <Route path="/brand/:id" element={<PageBrandProducts />} />
          <Route path="/:gender/products" element={<PageProducts />} />
          <Route path="/product/:id" element={<PageProduct />} />
          <Route path="/profile" element={<PageProfile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/activate/:link" element={<PageActivate />} />
      </Routes>
    </Suspense>
  );
};
