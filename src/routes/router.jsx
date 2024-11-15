import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import FindUs from '../components/FindUs';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../layout/AuthLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={`/category/01`}></Navigate>,
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <h2>Login</h2>
            },
            {
                path: '/auth/register',
                element: <h2>Register form</h2>
            }
        ]
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default router;