import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPart = '/' }) {
    const login = localStorage.getItem('login');

    if (!login) {
        return <Navigate to={redirectPart} replace />
    }

    return <Outlet />
}

export default ProtectedRoute;