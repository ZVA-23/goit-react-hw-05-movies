import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const locatiom = useLocation();
  return (
    <>
      <header>
        {!locatiom.pathname.includes(`details`) && <Navigation />}
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
