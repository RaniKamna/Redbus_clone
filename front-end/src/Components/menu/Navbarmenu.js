import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import logo from '../../img/logo.jpg';
import "./Navbarmenu.css";
// import {SignInwithGoogle} from '../../firebase';
// import { firebase } from '../../firebase.js';
import {FaUserCircle} from "react-icons/fa";
const Navbarmenu = () => {

    const Redirect = async () =>
    {
        await(window.location.href="http://localhost:2233/auth/google")
    }


    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
    <div className="MycontainerBody">
            <header className="header__middle">
        <div className="Navbercontainer">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img className="NavBarLogoimg" src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" alt="logo" /> 
                    </NavLink>
                </div>

                <div className="leftNav">
                    <ul>
                      <li className="li1"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}><Link to = "/"> BUS TICKETS</Link></NavLink></li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}><Link to = "/rpool"> rPool  <sup>New</sup> </Link> </NavLink></li>
                      <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}><Link to = "/bushire"> BUS HIRE</Link> </NavLink></li>
                    </ul>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    {/* <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li> */}
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> Help </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Manage Booking <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Bus Tickets </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Cancle </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Change Travel Date </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Show My Tickets </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Email/SMS </NavLink> </li>
                        </ul>
                    </li>
                    <li className="userprofilelogo"><FaUserCircle/></li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" ><FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li><NavLink onClick={Redirect} activeClassName='is-active' to={''}> Sign In/Sign Up </NavLink> </li>
                        </ul>
                    </li>

                    {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li> */}
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    </div>
    
    )
}

export default Navbarmenu
{/* <img className="userprofilelogo" src="https://freesvg.org/img/abstract-user-flat-1.png" alt="logo" /> */}