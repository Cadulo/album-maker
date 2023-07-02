import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const { isLoading, isAuthenticated } = useAuth();
    console.log(isLoading, isAuthenticated)
    if (isLoading) return <h1>Loading...</h1>
    if (!isLoading && !isAuthenticated) return <Navigate to='login' replace/>
    return(
        <Outlet/>
    )
}

export default ProtectedRoute