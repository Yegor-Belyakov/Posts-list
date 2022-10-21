import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";


export const privatRoutes = [
  {path: '/about', element: <About/>, exact: true},
  {path: '/posts', element: <Posts/>, exact: true},
  {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]

export const publicRoutes = [
  {path: '/login', element: <Login/>, exact: true},
  {path: '*', element: <Login/>, exact: true},
  
  
]