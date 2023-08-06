import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SiginUp/SignUp';
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/room-details/:id',
        element: (
          <PrivateRoute>
            {' '}
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
]);
