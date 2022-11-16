import { useAuthState } from 'react-firebase-hooks/auth';
import { AppRouter, Loader, Navbar } from './components';

import { auth } from './utils/firebase';

import './app.scss';

const App = () => {
  const [, loading] = useAuthState(auth);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
