import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from './pages/login/SignIn/SignIn';
import SignUp from './pages/login/SignUp/SignUp';
import LoginLayout from './pages/login/LoginLayout';
// import ForgotPassword from './pages/login/ForgotPassword/ForgotPassword';
import PortalLayout from './pages/portal/PortalLayout';
import Home from './pages/portal/Home/Home';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortalLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        path: 'signIn',
        element: <SignIn />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
