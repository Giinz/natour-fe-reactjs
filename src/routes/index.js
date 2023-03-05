import {
    createBrowserRouter,
} from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/SignUp';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import { AuthProvider } from '../utils/auth';

const routes = [
    {
        path: '/',
        element: <AuthProvider><DefaultLayout/></AuthProvider>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
