import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'core/routes';
import useSize from 'core/hooks/useSize';
import { useDispatch } from 'react-redux';
import { currentPage } from 'core/redux/feature/page.feature';

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

  const { iconNavbarSize } = useSize();
  const page = routes
    .map((item: { route: string }): string => item.route)
    .indexOf(location.pathname);

  useEffect(() => {
    dispatch(currentPage(page));
  }, [dispatch, page]);

  const nextRoute = page < routes.length - 1 ? routes[page + 1] : routes[0];
  const prevRoute = page - 1 === -1 ? routes[routes.length - 1] : routes[page - 1];

  const handleClick = () => {
    navigate((left && prevRoute.route) || (right && nextRoute.route));
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      style={{ fontSize: iconNavbarSize }}
      className={`${placement} translate-x-top-2/4 translate-y-top-2/4 absolute top-[90%]  z-0 animate-pulse cursor-pointer transition-all duration-300 hover:scale-[1.2]`}
      icon={icon}
    />
  );
};

export default ArrowRoute;
