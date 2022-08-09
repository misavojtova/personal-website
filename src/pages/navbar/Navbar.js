import React, { useState, useEffect } from 'react';
import 'tailwind.css';
import { routes } from 'core/routes';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import useSize from 'core/hooks/useSize';

const Navbar = () => {
  const { height } = useWindowDimensions();
  const { iconNavbarSize } = useSize();
  const [active, setActive] = useState(false);
  const [resized, setResized] = useState('');
  const renderHeight = active ? height : (height / 100) * 10;

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
        className='class="md:mt-2" my-3 mx-2 border-b-2 border-b-transparent transition-all duration-150 ease-in-out hover:scale-110 hover:border-b-2 hover:border-main-color md:my-0'
        to={link.route}
        key={link.id}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <nav
      style={{ height: `${renderHeight}px` }}
      className={`NavBar ${resized}
    cm-flex-col absolute z-10 flex  w-full bg-[#0a0e12] transition-[height] duration-1000 md:relative md:flex-row md:justify-between md:bg-transparent`}
    >
      {/* --------------------------- NAVIGATION LINKS --------------------------------- */}
      <div
        className={`cm-flex-col opacity-0 transition-[opacity] ${
          active ? 'opacity-100 duration-1500' : 'duration-500'
        } md:flex-row md:opacity-100`}
      >
        {navigationLinks}
      </div>

      {/* --------------------------- REDIRECT ICONS ------------------------------------ */}
      <div
        style={{ fontSize: iconNavbarSize }}
        className={`z-10 flex justify-center opacity-0 transition-[opacity] ${
          active ? 'opacity-100 duration-1500' : 'duration-500'
        } md:opacity-100 `}
      >
        <BsLinkedin className={`cm-icons  `} />
        <VscGithub className='cm-icons' />
      </div>

      {/* -------------------------------- HAMBURGER MENU --------------------------------- */}
      <div
        style={{ fontSize: iconNavbarSize }}
        className='absolute top-0 right-1 z-10 flex cursor-pointer transition-all duration-300 hover:scale-110 md:hidden'
        onClick={() => setActive(!active)}
      >
        <HiOutlineMenu />
      </div>
    </nav>
  );
};
//
export default Navbar;
