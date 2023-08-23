import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUserRole } from "../../../features/users/userSlice";

const RequireAuth = ({ requiredRouteRole }) => {
  const role = useSelector(selectCurrentUserRole);
  const location = useLocation();

  const hasPermissionToRoute = (requiredRouteRole) => {
    return role === requiredRouteRole;
  };

  return hasPermissionToRoute(requiredRouteRole) ? (
    <Outlet />
  ) : role ? (
    <Navigate to="/unauth" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
