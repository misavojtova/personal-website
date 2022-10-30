import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'core/routes';
import { useDispatch } from 'react-redux';
import { currentPage } from 'core/redux/feature/page.feature';
import { HOVER_SCALE_ANIMATION_ONE, ICON_NAVBAR_SIZE } from 'core/config/configSize';

interface ArrowRouteProps {
  icon: any;
  placement?: string;
  left?: boolean;
  right?: boolean;
}

const ArrowRoute: FC<ArrowRouteProps> = ({ icon, placement, left, right }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const page = routes
    .map((item: { route: string }): string => item.route)
    .indexOf(location.pathname);

  useEffect(() => {
    dispatch(currentPage(page));
  }, [dispatch, page]);

  const next = page < routes.length - 1 ? routes[page + 1] : routes[0];
  const prev = page - 1 === -1 ? routes[routes.length - 1] : routes[page - 1];

  const handleClick = () => {
    navigate((left && prev.route) || (right && next.route));
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      className={`${placement} ${ICON_NAVBAR_SIZE} translate-x-top-2/4 translate-y-top-2/4 absolute bottom-[5%]  z-0 animate-pulse cursor-pointer transition-all duration-300 ${HOVER_SCALE_ANIMATION_ONE}`}
      icon={icon}
    />
  );
};

export default ArrowRoute;
