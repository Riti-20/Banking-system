import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Dashboard.jsx';
import CreateAccount from "./CreateAccount.jsx"


let data = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Dashboard',
    element: <About/>
  },
  {
    path: '/CreateAccount',
    element: <CreateAccount/>
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}>
    <App />
  </RouterProvider>
)