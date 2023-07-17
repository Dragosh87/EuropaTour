import React, {useContext, useState} from "react";
import Navbar from "./Components/Navbar";
import {LocalContext} from './Context'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [setItem, getItem] = useContext(LocalContext);
    const [inProgress, setInProgress] = useState(null);
    const [success, setSuccess] = useState(null);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogMessage, setDialogMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    async function handleLogin() {
        const loginDetail = {
            identifier: username,
            password: password
        };
        setInProgress(true)
        const response = await fetch(
            "http://localhost:1337/api/auth/local",
            {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(loginDetail),
            }
        );
        const body = await response.json();
        setOpen(true);
        setInProgress(false)
        if (response.status === 200) {
            setSuccess(true)
            setDialogTitle('Login Successful')
            setDialogMessage('You have successfully logged in. Click ok to go to the hompage')
            setItem(body)
        } else {
            setSuccess(false)
            setDialogTitle('Error Logging in')
            setDialogMessage(<div>{body.error.message}</div>)
        }
    }

    return (

        <>
            <Navbar/>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{dialogTitle}</DialogHeader>
                <DialogBody divider>
                    {dialogMessage}
                </DialogBody>
                <DialogFooter>
                    {success !== null &&
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={() => success ? navigate('/') : setOpen(false)}>
                            <span>OK</span>
                        </Button>
                    }
                </DialogFooter>
            </Dialog>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Username
                                </label>
                                <input
                                    type="username"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="user12345"
                                    required=""
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                disabled={inProgress}
                                onClick={handleLogin}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Dont have an account yet?
                                <Link
                                    to="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
