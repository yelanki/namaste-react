  import { Link } from "react-router-dom";
  export const Header=()=>{
    return(
        <div className="header">
            <div>
            <img className="logo" alt='app-logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf='></img>
           </div>
           <div className='nav-items'>
            <ul>
                <li>
                 <Link to='/home'>Home</Link>
                    </li>
                <li>
                    <Link to='/about'>about us</Link></li>
                <li>
                    <Link to='/contactus'>Contactus</Link></li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
   };