import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./Components/Login/Login";
import {OrderFilm} from "./Components/ListFilms/OrderFilm";
import {Order} from "./Components/ListFilms/Order";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'order',
        element: <OrderFilm/>
    },
    {
        path: 'zakaz',
        element: <Order/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

