import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react"

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, isAuthenticated, errors: loginErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/")
    }, [isAuthenticated])


    const onSubmit = handleSubmit(async (data) => {
        await signin(data)
        
    })

    return (
        <div>
            {
                loginErrors.map((error, i) => (
                    <div className="bg-red-500 text-white text-center" key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8">

                <div>
                    <label htmlFor="email" className="block mb-2  dark:text-white">
                        Email
                    </label>
                    <input
                        type="email" id="email"
                        {...register("email", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    {errors.email && (
                        <p className="text-red-500"> email is required</p>
                    )}

                    <label htmlFor="password" className="block mb-2  dark:text-white">
                        Password
                    </label >
                    <input
                        type="password" id="password"
                        {...register("password", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    {errors.password && (
                        <p className="text-red-500 "> password is required</p>
                    )}
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4"
                    > Sign in</button>
                    <div className="flex gap gap-x-2 justify-between dark:text-white">
                        Don't have an account? <Link className="text-sky-500" to={"/register"}>Sign up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;