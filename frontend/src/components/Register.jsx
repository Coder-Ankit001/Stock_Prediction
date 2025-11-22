import React from 'react'
import { useState, CSSProperties } from 'react'
import axios from 'axios'
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  borderColor: "white",
};

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [success, setSucess] = useState(false)
    const [errors, setErrors] = useState({})

    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState("#ffffff");


    const handleRegistration = async (e) => {
        e.preventDefault()
        setLoading(true)

        const userData = {
            username, email, password
        }

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log("Response Data: ", res.data)
            setErrors({})
            setSucess(true)
            console.log("Registration Sucessfull")
        }
        catch (error) {
            console.log("Registration Error:", error.response?.data);
            setErrors(error.response?.data || {});
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Create an Account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegistration} method="POST" className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                                <small className='mt-1'>{errors.username && <div className='text-red-400'>{errors.username}</div>}</small>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                                <small>{errors.email && <div className='text-red-400'>{errors.email}</div>}</small>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                                <small className='mt-1'>{errors.password && <div className='text-red-400'>{errors.password}</div>}</small>
                            </div>
                        </div>

                        <div>

                            {loading ? <button
                                type="submit"
                                disabled
                                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                <div className='flex gap-x-4 items-center'>
                                <ClipLoader
                                        color={color}
                                        loading={loading}
                                        cssOverride={override}
                                        size={14}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                        />
                                    <p>Please Wait</p>
                            </div>
                            </button>
                                : <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Register
                                </button>
                            }
                            {success && <div className='text-white text-xs mt-1'>Registration is Sucessfull!</div>}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Register

