import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import ErrorPage from './error-page';
import Home from '../pages/Home/Home';
import AvailableCamp from '../components/Available_Camp/AvailableCamp';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/available-camp',
        element: <AvailableCamp />,
      },
    ],
  },
  {
    path: '/login',
    element: <SignIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
]);
