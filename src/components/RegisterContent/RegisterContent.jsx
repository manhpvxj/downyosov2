import { Link, useNavigate } from "react-router-dom";      
import { useState } from "react";
import axiosClient from '../../api/axiosClient';  

const RegisterContent = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errMessage, setErrMessage] = useState("");
    const navigate = useNavigate();

    const handlePasswordRegister = () => {
        if(userData.password !== userData.confirmPassword) {
            setErrMessage("Passwords do not match");
        }
        else {
            setErrMessage("");
        }
    }

    const handleSubmitRegister = async () => {
            if (userData) {
                    try {
                        await axiosClient.post("/auth/register", userData);
                        navigate("/login");
                    } catch (e) {
                        setErrMessage(e.response.data.errMsg);
                    }
                }
      }
    
    return (
        <div>
            <div className=" flex items-center p-4 py-8 m-auto bg-zinc-800 dark:bg-zinc-100 sm:p-8">
                <div className="py-4 mx-auto w-64 md:w-96">
                    <h1 className="text-center font-extrabold text-4xl text-white leading-8 tracking-tight dark:text-zinc-700">Register</h1>
                    <div className="items-center justify-center mt-10">
                        <div className="w-[80%] ml-[10%]">
                            <div className="flex flex-row items-center justify-between">
                                <label className="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800">Username</label>
                            </div>
                            <div className="relative flex mt-1 shadow">
                                <input name="username" required
                                value={userData.username}
                                type="text" 
                                className="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setUserData({...userData, username: e.target.value})}}/>
                            </div>
                        </div>

                        <div className="mt-4 w-[80%] ml-[10%] sm:mt-2">
                            <div className="flex flex-row items-center justify-between">
                                <label className="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800">Email</label>
                            </div>
                            <div className="relative flex mt-1 shadow">
                                <input name="email" required
                                value={userData.email} 
                                type="text" 
                                className="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setUserData({...userData, email: e.target.value})}}/>
                            </div>
                        </div>

                        <div className="mt-4 w-[80%] ml-[10%] sm:mt-2">
                            <div className="flex flex-row items-center justify-between">
                                <label className="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800">Password</label>
                            </div>
                            <div className="relative flex mt-1 shadow">
                                <input 
                                required
                                name="password" 
                                value={userData.password}
                                type="password" 
                                className="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setUserData({...userData, password: e.target.value})}}/>
                            </div>
                        </div>

                        <div className="mt-4 w-[80%] ml-[10%] sm:mt-2">
                            <div className="flex flex-row items-center justify-between">
                                <label className="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800">Confirm password</label>
                            </div>
                            <div className="relative flex mt-1 shadow">
                                <input 
                                required
                                name="confirmPassword" 
                                value={userData.confirmPassword} 
                                type="password" 
                                className="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setUserData({...userData, confirmPassword: e.target.value})}}
                                onBlur={handlePasswordRegister}/>
                            </div>
                            <div className="flex w-full text-xs text-red-500 mt-2">
                            {errMessage}
                        </div>
                        </div>
                        
                        <div className="flex w-full mt-10 flex-col justify-center items-center">
                            <button 
                                className="items-center font-bold bg-pink-300 text-white py-3 px-9 hover:bg-white border-pink-300 hover:text-pink-300 rounded-lg dark:bg-blue-400 dark:text-zinc-600 dark:hover:bg-white border-[0.5px] dark:border-blue-400 dark:hover:text-blue-400" 
                                onClick={handleSubmitRegister}>
                                <p>Register</p>
                            </button>
                        </div>
                    </div>
                    
                    <div className=" text-sm text-center mt-4 text-pink-300 dark:text-blue-400">
                        <Link to="/login">
                            <p className="cursor-pointer hover:opacity-70">Already have an account?</p> 
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterContent;