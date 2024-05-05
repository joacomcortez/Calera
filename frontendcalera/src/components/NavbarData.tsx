import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import { useSessionUser } from '../Store/userStore';

export const useNavbarData = () => {
  const user = useSessionUser();

  const loggedUserNavbarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cName: 'nav-text',
    },
    {
      title: 'Create game',
      path: '/creategame',
      icon: <AiIcons.AiOutlinePlayCircle />,
      cName: 'nav-text',
    },
    {
      title: 'Join game',
      path: '/joingame',
      icon: <GiIcons.GiCard7Diamonds />,
      cName: 'nav-text',
    },
    {
      title: 'Log out',
      path: '/logout',
      icon: <IoIcons.IoMdExit />,
      cName: 'nav-text',
    },
  ];

  const notLoggedNavbarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cName: 'nav-text',
    },
    {
      title: 'Login',
      path: '/login',
      icon: <AiIcons.AiOutlineUser />,
      cName: 'nav-text',
    },
    {
      title: 'Sign up',
      path: '/signup',
      icon: <AiIcons.AiOutlineUserAdd />,
      cName: 'nav-text',
    },
  ];
  let navbarData;
  if (user === undefined) {
    navbarData = notLoggedNavbarData;
  } else {
    navbarData = loggedUserNavbarData;
  }

  return {
    navbarData,
  };
};

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'Create game',
    path: '/creategame',
    icon: <AiIcons.AiOutlinePlayCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Join game',
    path: '/joingame',
    icon: <GiIcons.GiCard7Diamonds />,
    cName: 'nav-text',
  },
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text',
  },
  {
    title: 'Sign in',
    path: '/signup',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text',
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <IoIcons.IoMdExit />,
    cName: 'nav-text',
  },
];
