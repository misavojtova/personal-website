import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'core/routes';
import useSize from 'core/hooks/useSize';

interface ArrowRouteProps {
  icon: any;
  placement?: string;
  left?: boolean;
  right?: boolean;
}

const ArrowRoute: FC<ArrowRouteProps> = ({ icon, placement, left, right }) => {
  const location = useLocation();
  const { iconNavbarSize } = useSize();
  const navigate = useNavigate();
  const indexOfLocation = routes
    .map((item: { route: string }): string => item.route)
    .indexOf(location.pathname);
  const nextRoute = indexOfLocation < routes.length - 1 ? routes[indexOfLocation + 1] : routes[0];
  const prevRoute =
    indexOfLocation - 1 === -1 ? routes[routes.length - 1] : routes[indexOfLocation - 1];

  console.log(indexOfLocation);
  const handleClick = () => {
    navigate((left && prevRoute.route) || (right && nextRoute.route));
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      style={{ fontSize: iconNavbarSize }}
      className={`${placement} translate-x-top-2/4 translate-y-top-2/4 absolute top-2/4  z-0 animate-pulse cursor-pointer transition-all duration-300 hover:scale-[1.2]`}
      icon={icon}
    />
  );
};

export default ArrowRoute;
