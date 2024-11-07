import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/2-homes/home';
import Html from './components/page/html';
import Css from './components/page/css';
import Javascript from './components/page/javascript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>oops error!</h1> ,
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement: <h1>oops error!</h1> ,
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement: <h1>oops error!</h1> ,
  },
  {
    path: "/js",
    element: <Javascript/>,
    errorElement: <h1>oops error!</h1> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


