import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const { isLoading, isAuthenticated } = useAuth();
    console.log(isLoading, isAuthenticated)
    if (isLoading) return <h1>Loading...</h1>
    if (!isLoading && !isAuthenticated) return <Navigate to='login' replace/> //Replace permite reemplazar la ruta acutal con la ruta establecida, lo cual permite que el usuario no pueda retroceder y acceder a una ruta protegida
    return(
        <Outlet/>
    )
}

export default ProtectedRoute