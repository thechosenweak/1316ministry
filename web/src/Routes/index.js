import { useSelector } from 'react-redux';
import HomeRoutes from './HomeRoutes';
import LandingRoutes from './LandingRoutes';

export default function Routes() {
  const userData = useSelector((state) => state.user.userData);
  return (
    <>
      {
        userData === null ? (
          <LandingRoutes />
        ) : (
          <HomeRoutes />
        )
      }
    </>
  );
}
