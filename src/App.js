import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { About } from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


   const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
   };

   const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"/home",
          element:<Body/>
        },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contactus",
      element:<Contactus/>,
    },
    {
      path:'/restaurantMenu/:resId',
      element:<RestaurantMenu/>
    },
      ],
      errorElement:<Error/>,
    },
   ])
const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(<RouterProvider router={appRouter}/>);



//Link to know about React routers:-https://reactrouter.com/en/main/start/overview



 //React basics below
// const parent=React.createElement('div',{},React.createElement('h1',{},'This is from react'));
// console.log(parent)
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



//React starts from here
//JSX transpiles before it reaches the JS->parcel->Babel

//Plan
/* 
 Header
   -Logo
   -Navbar
 Body
  -Search Bar
  -Reasturent container
   -Restaurent Card
     -img
     -Name of res, Start rating, cuisine, 
 Footer
   -Links
   -Address
   -Contact
 */


