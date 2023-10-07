import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from './pages/login/SignIn/SignIn';
import SignUp from './pages/login/SignUp/SignUp';
import LoginLayout from './pages/login/LoginLayout';
import ForgotPassword from './pages/login/ForgotPassword/ForgotPassword';
import Portal from './pages/portal/Portal';
import Control from './pages/portal/Control/Control';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portal />,
    children: [
      {
        path: '/',
        element: <Control />,
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
      {
        path: 'forgotPassword',
        element: <ForgotPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
