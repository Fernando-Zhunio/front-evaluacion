// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { FormBasic } from './pages/form1/FormBasic';
// import App from './App';
import { HomeIndex } from './pages/home/HomeIndex';
import { FormBasic } from './pages/form1/FormBasic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeIndex />,
  },
  {
    path: "/form/:id",
    element: <FormBasic />
  }
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App /> 
//   </StrictMode>,
// ) 
