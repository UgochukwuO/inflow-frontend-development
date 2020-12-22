import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';



/*
{
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
 */
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
