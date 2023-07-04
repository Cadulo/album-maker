import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.api'
import { imageMongo,getImagesMongo,deleteImageMongo } from '../api/images.api'

import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used withn and AuthProvider")
    }
    return context
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {

        try {
            const res = await loginRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response.data.message)
            if (Array.isArray(error.response.data)) {
                console.log(error.response.data)
                return setErrors(error.response.data)
            }
            console.log(error.response.data.message)
            setErrors([error.response.data.message])
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
      };

    const upLoadToMongo = async (imageDataUrl) =>{
      
        try {
            const res = await imageMongo(imageDataUrl)
            console.log(res.data)

        } catch (error) {
            console.log(error.response)
        }
    }

    const downLoadFromMongo = async () => {
        try {
            const res = await getImagesMongo()
            return res.data
        }
        catch(error) {
            console.log(error.response)
            throw error;
        }
    }

    const deleteFromMongo = async (id) => {
        
        try {
            const res = await deleteImageMongo(id);  
            return res
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    //Despues de 5 segundos se eliminan los errores para que deje de ense;ar en pantalla
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    //Validacion si un usuario esta logeado
    useEffect(() => {

        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log(res);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
              } catch (error) {
                console.log(error)
                setIsAuthenticated(false);
                setLoading(false);
                setUser(null);
              }
        }
        checkLogin();
    }, [])

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user,
            isAuthenticated,
            errors,
            isLoading,
            upLoadToMongo,
            downLoadFromMongo,
            deleteFromMongo
        }}>
            {children}
        </AuthContext.Provider>
    )

}