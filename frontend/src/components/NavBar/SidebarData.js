import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Discover',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Artist',
    path: '/artist-page',
    icon: <BsIcons.BsMusicNoteBeamed />,
    cName: 'nav-text'
  },
  {
    title: 'Label',
    path: '/label',
    icon: <BsIcons.BsFillTagFill />,
    cName: 'nav-text'
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <CgIcons.CgLogIn />,
    cName: 'nav-text'
  },
  {
    title: 'SignUp',
    path: '/registration',
    icon: <FaIcons.FaFileSignature />,
    cName: 'nav-text'
  }
];
