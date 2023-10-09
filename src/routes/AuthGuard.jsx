import { Navigate } from "react-router-dom";

function AuthGuard({ user, children }) {
    if (!user) return <Navigate to={"/"} replace />;
    return children;
}

export default AuthGuard;
