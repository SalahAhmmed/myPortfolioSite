import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout></Layout>,
    children :[{
      path:"/",
      element: <Home></Home>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
