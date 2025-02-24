import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import ErrorPage from './error-page';
import Home from '../pages/Home/Home';
import AvailableCamp from '../components/Available_Camp/AvailableCamp';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import DashboardLayout from '../layouts/DashboardLayout';
import PrivateRoutes from './PrivateRoutes';
import AnalyticsGraph from '../components/Dashboard/Participant/AnalyticsGraph';
import HistoryPayment from '../components/Dashboard/Participant/HistoryPayment';
import CampsRegistered from '../components/Dashboard/Participant/CampsRegistered';
import Profile from '../components/Dashboard/Sidebar/Profile';
import AddACamp from '../components/Dashboard/Admin/AddACamp';

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
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'add-camp',
        element: (
          <PrivateRoutes>
            <AddACamp />
          </PrivateRoutes>
        ),
      },
      {
        path: 'analytics',
        element: (
          <PrivateRoutes>
            <AnalyticsGraph />
          </PrivateRoutes>
        ),
      },
      {
        path: 'payment-history',
        element: (
          <PrivateRoutes>
            <HistoryPayment />
          </PrivateRoutes>
        ),
      },
      {
        path: 'registered-camps',
        element: (
          <PrivateRoutes>
            <CampsRegistered />
          </PrivateRoutes>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

/* 
Anwar Hossain
anawar_hossain@doodle.com
Anawar@1234
*/

/* 
Ola Bibi
ola_bibi@doodle.com
Ola@1234
*/
