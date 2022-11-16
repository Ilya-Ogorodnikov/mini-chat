import { LOGIN_ROUTE, CHAT_ROUTE } from '.';
import { Chat, Login } from '../../components';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    component: <Chat />,
  },
];
