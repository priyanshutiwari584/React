import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
function Signup() {
    const navigate = useNavigate() // Hook for programmatic navigation
    const dispatch = useDispatch(); // Hook to dispatch actions
    const { register, handleSubmit } = useForm(); // Destructuring register and handleSubmit from useForm hook
    const [error, setError] = useState(""); // State for storing and setting error messages

    // Function to handle account creation
    const create = async (data) => {
        setError("") // Resetting error state
        try {
            const userData = await authService.createAccount(data) // Attempting to create an account with provided data
            if (userData) {
                const userData = await authService.getCurrentUser() // Fetching current user data
                if (userData) dispatch(login(userData)); // Dispatching login action with user data
                navigate("/"); // Navigating to the homepage on successful account creation
            }
            navigate("/") // Navigating to the homepage regardless of account creation status
        } catch (error) {
            setError(error.message) // Setting error message in case of failure
        }
    }

    return (
        <div className="flex items-center justify-center">
            Hello World
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Displaying the Logo component */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In {/* Link to navigate to the login page */}
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>} {/* Displaying error message if any */}

                <form onSubmit={handleSubmit(create)}> {/* Form submission handled by the create function */}
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true, // Making the name field required
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true, // Making the email field required
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address", // Validating the email format
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true, // Making the password field required
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account {/* Button to submit the form */}
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup; // Exporting the Signup component