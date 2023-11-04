import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';


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

 

  
   

   const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
   };
const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(<AppLayout/>);