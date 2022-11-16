import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Chat, Login } from '..';

import { privateRoutes, publicRoutes } from '../../utils/constants/routes';
import { auth } from '../../utils/firebase';

const AppRouter: FC = () => {
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route path="*" element={<Chat />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
