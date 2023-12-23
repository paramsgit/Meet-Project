import './App.css';
// import socketConnection from './utils/socketConnection'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import VidePage from './files/videPage';
import Home from './files/home';
import ErrorPage from './files/errorPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/join",
      element: <VidePage />,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
