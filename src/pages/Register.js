import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import Switcher from "../components/Switcher";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        
        await signup(values)
    })

    return (
        <div>
            <div className="flex justify-center  pt-10"> <Switcher></Switcher></div>
            <div className="text-2xl font-bold text-center my-5 dark:text-white">¡Registrate y guarda tus mejores recuerdos!</div>
            {
                registerErrors.map((error, i) => (
                    <div className="bg-red-500 text-white text-center" key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8">

                <div>
                    <label htmlFor="username" className="block mb-2  dark:text-white">
                        Username
                    </label>
                    <input
                        type="text" id="username"
                        {...register("username", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    {errors.username && (
                        <p className="text-red-500"> username is required </p>
                    )}

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
                        <p className="text-red-500 mb-2"> password is required</p>
                    )}
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    > Sign up</button>

                    <div className="flex gap gap-x-2 justify-between dark:text-white">
                        Already have an account? <Link className="text-sky-500" to={"/login"}>Sign in</Link>
                    </div>
                </div>
            </form>

        </div>

    )


}

export default Register;