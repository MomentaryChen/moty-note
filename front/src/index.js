import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './App';
import ErrorPage from './component/error-page/ErrorPage';
import Note from './component/note/Note'

const router = createBrowserRouter([
  {
    path: "note",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Note />,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/note" replace />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
