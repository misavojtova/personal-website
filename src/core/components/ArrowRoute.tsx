import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'core/routes';
interface ArrowRouteProps {
  icon: any;
  className?: string;
  left?: boolean;
  right?: boolean;
}

const ArrowRoute: FC<ArrowRouteProps> = ({ icon, className, left, right }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const indexOfLocation = routes
    .map((item: { route: string }): string => item.route)
    .indexOf(location.pathname);
  const nextRoute = indexOfLocation < routes.length - 1 ? routes[indexOfLocation + 1] : routes[0];
  const prevRoute =
    indexOfLocation - 1 === -1 ? routes[routes.length - 1] : routes[indexOfLocation - 1];

  const handleClick = () => {
    navigate((left && prevRoute.route) || (right && nextRoute.route));
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      className={`${className} translate-x-top-2/4 translate-y-top-2/4 absolute  top-2/4  animate-pulse cursor-pointer text-6xl transition-all   duration-300 hover:scale-125`}
      icon={icon}
    />
  );
};

export default ArrowRoute;
