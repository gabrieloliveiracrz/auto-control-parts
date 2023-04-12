import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from './pages/login/SignIn/SignIn';
import SignUp from './pages/login/SignUp/SignUp';
import Login from './pages/login/Login';
// import ForgotPassword from './pages/login/ForgotPassword/ForgotPassword';
// import Layout from './pages/portal/Portal';
// import Home from './pages/portal/Home/Home';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login/',
    element: <Login />,
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
