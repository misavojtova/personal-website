import React, { useState, useEffect } from 'react';
import 'tailwind.css';
import { useSelector } from 'react-redux';
import { routes } from 'core/routes';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import useWindowDimensions from 'core/hooks/useWindowDimensions';
import { ICON_NAVBAR_SIZE } from 'core/config/configSize';
import { HOVER_SCALE_ANIMATION_ONE, MAIN_APP_PADDING } from 'core/config/configSize';

const Navbar = () => {
  const { height, navbarHeight } = useWindowDimensions();
  const [active, setActive] = useState(false);
  const [resized, setResized] = useState('');
  const renderHeight = active ? height : navbarHeight;

  const currentPage = useSelector<any, number>(state => state.page.currentPage);

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
        className={`class="md:mt-2" my-3 mx-2 border-b-2 border-b-transparent transition-all duration-100 ease-in-out hover:scale-110 hover:border-b-2 hover:border-main-color md:my-0 ${
          link.id === currentPage && 'scale-110 border-b-2 border-b-main-color'
        }`}
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
      className={`NavBar ${resized} ${MAIN_APP_PADDING}
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
        className={`${ICON_NAVBAR_SIZE} z-10 flex justify-center opacity-0 transition-[opacity] ${
          active ? 'opacity-100 duration-1500' : 'duration-500'
        } md:opacity-100 `}
      >
        <BsLinkedin
          className={`mx-2 mt-6 cursor-pointer rounded-3xl text-main-color   ${HOVER_SCALE_ANIMATION_ONE} md:mt-2`}
        />
        <VscGithub
          className={`mx-2 mt-6 cursor-pointer rounded-3xl text-main-color duration-150  ${HOVER_SCALE_ANIMATION_ONE} md:mt-2`}
        />
      </div>

      {/* -------------------------------- HAMBURGER MENU --------------------------------- */}
      <div
        className={`${ICON_NAVBAR_SIZE} absolute  top-0 right-1 z-10 flex cursor-pointer transition-all duration-300 ${HOVER_SCALE_ANIMATION_ONE} md:hidden`}
        onClick={() => setActive(!active)}
      >
        <HiOutlineMenu />
      </div>
    </nav>
  );
};
//
export default Navbar;
