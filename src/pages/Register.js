import { useForm } from "react-hook-form"
import {registerRequest} from '../api/auth'

function Register() {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form  onSubmit = {handleSubmit( async (values) => {
                    const res = await registerRequest(values)
                    console.log(res)
                })} className="max-w-md mx-auto mt-8">
                
                <div>
                    <label htmlFor="username" className="block mb-2  dark:text-white">
                        Username
                    </label>
                    <input
                        type="text" id="username"
                        {...register("username", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <label htmlFor="email" className="block mb-2  dark:text-white">
                        Email
                    </label>
                    <input
                        type="email" id="email"
                        {...register("email", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <label htmlFor="password" className="block mb-2  dark:text-white">
                        Password
                    </label >
                    <input
                        type="password" id="password"
                        {...register("password", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    > Sign up</button>
                </div>
            </form>

        </div>

    )


}

export default Register;