import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './Component/AddService/AddService';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import MyReviews from './Component/MyReviews/MyReviews';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import Services from './Component/Services/Services';
import Signin from './Component/SignIn/Signin';
import Signup from './Component/SignUp/Signup';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/services',
          loader:()=> fetch(`https://kids-camp-server.vercel.app/services`),
          element:<Services></Services>
        },
        {
          path:'/services/:serviceId',
          loader:({params})=> fetch(`https://kids-camp-server.vercel.app/services/${params.serviceId}`),
          element:<ServiceDetail></ServiceDetail>
        },
        {
          path:'/weblog',
          loader: ()=> fetch('https://kids-camp-server.vercel.app/blog'),
          element:<Blog></Blog>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        },
        {
          path:'/myreviews',
          element:<MyReviews></MyReviews>
        },
        {
          path:'/addservice',
          element:<AddService></AddService>
        }


      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
