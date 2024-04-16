import React, { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loading from "./components/Loading"
import "./index.css";
;
const ListPost = lazy(
  ()=>import("./feature/post/components/ListPost")
)
const CreatePost = lazy(
  ()=>import("./feature/post/components/Createpost")
)
const LoginPage = lazy(
  ()=>import('./feature/auth/LoginPage')
)
const SignupPage = lazy(
  ()=>import('./feature/auth/SignupPage')
)
const HomePage = lazy(
  ()=>import("./pages/HomePage")
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/post:postId",
    element: <>post Detail page/</>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/createpost",
    element: <CreatePost/>,
  },
]);
const App = () => {
  return (
    <>
    Header
   <Suspense fallback={<Loading/>}>
    <RouterProvider router={router}/>
    <ToastContainer
    position='top-center'
    closeOnClick
    color="purple"
    />
    </Suspense>
    </>
    )
}

export default App