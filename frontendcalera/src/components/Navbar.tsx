/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { NavbarData, useNavbarData } from './NavbarData';
import '../stylesheet/Navbar.css';
import { IconContext } from 'react-icons';
import { useSessionUser } from '../Store/userStore';
import { showImage } from '../User/userService';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { navbarData } = useNavbarData();
  const showSidebar = () => setSidebar(!sidebar);

  const [imageurl, setImageurl] = useState<string>('');

  const user = useSessionUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate(`/login`);
    }
  }, []);

  // NO SE NECESITA CAPAZ
  // showImage(user?.id)
  //   .then((response) => {
  //     setImageurl('http://127.0.0.1:3000' + response.url);
  //   })
  //   .catch(() => console.log('error'));

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>{' '}
          {user && (
            <div className='userinfo'>
              <div className='usernameinfo'>{user.username}</div>
              {user.url && (
                <img
                  className='image'
                  src={'http://localhost:3000' + user.url}
                ></img>
              )}
            </div>
          )}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {navbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
