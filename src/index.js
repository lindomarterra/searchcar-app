import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Car from './pages/car/car'
import Contact from './pages/contact/contact'
import Estoque from './pages/estoque/estoque';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/car', element: <Car /> },
/*{ path: '/car:id', element: <Car /> }, */
  { path: '/contact', element: <Contact /> },
  { path: '/estoque', element: <Estoque /> },
])
  
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)


