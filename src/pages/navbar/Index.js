import React, { useState, useEffect } from 'react';
import 'tailwind.css';
import { routes } from 'core/routes';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [resized, setResized] = useState('');

  useEffect(() => {
    setResized('');
  }, [resized]);
  useEffect(() => {
    const onResize = () => {
      setActive(false);
      setResized('hidden');
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const navigationLinks = routes.map(link => {
    return (
      <Link
        className='class="mobile: desktop: md:mt-2" my-3 mx-2 border-b-2 border-b-transparent transition-all duration-150 ease-in-out hover:scale-110 hover:border-b-2 hover:border-main-color md:my-0'
        to={link.route}
      >
        {link.name}
      </Link>
    );
  });
  return (
    <nav // Navigation Links
      className={` ${active ? 'h-full' : 'h-0'} ${resized}
      cm-flex-col absolute flex w-full bg-main transition-[height] duration-1000 md:relative md:h-[8vh] md:flex-row md:justify-between md:bg-transparent md:opacity-100`}
    >
      <div
        className={`cm-flex-col opacity-0 transition-[opacity] ${
          active ? 'opacity-100 duration-1500' : 'duration-500'
        } md:flex-row md:opacity-100`}
      >
        {navigationLinks}
      </div>
      <div // Right Icons
        className={`flex justify-center text-4xl opacity-0 transition-[opacity] ${
          active ? 'opacity-100 duration-1500' : 'duration-500'
        } md:opacity-100 `}
      >
        <BsLinkedin className='cm-icons ' />
        <VscGithub className='cm-icons' />
      </div>
      <div
        className='absolute top-0 right-1 flex cursor-pointer text-4xl transition-all duration-300 hover:scale-110 md:hidden'
        onClick={() => setActive(!active)}
      >
        <HiOutlineMenu />
      </div>
    </nav>
  );
};
//
export default Navbar;
