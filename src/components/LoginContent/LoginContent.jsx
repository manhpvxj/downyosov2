import {Link , useNavigate} from 'react-router-dom';
import {useState} from "react";
import axiosClient from '../../api/axiosClient';

const LoginContent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const navigate = useNavigate();
    const handleSubmitLogin= async () => {
        if (username && password ) {
            try {
            const res = await axiosClient.post("/auth/login", {
                username,
                password,
            });
            localStorage.setItem("id", res._id);
            localStorage.setItem("username", res.username);
            localStorage.setItem("token", res.token);
            alert("Login successful!");
            navigate("/u/"+res.username);
            } catch (e) {
                setErrMessage(e.response.data.errMsg);
            }
          }
        }
    
    return (
        <div>
            <div className=" flex items-center p-4 py-8 m-auto bg-zinc-800 dark:bg-zinc-100 duration-1000 sm:p-8">
                <div className="py-4 mx-auto w-64 md:w-96">
                    <h1 
                        className="text-center font-extrabold text-4xl text-white leading-8 tracking-tight dark:text-zinc-700">Login</h1>
                    <div className="items-center justify-center mt-10">
                        <div className="w-[80%] ml-[10%]">
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Username or Email</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input 
                                name="username" 
                                value={username} 
                                type="text" 
                                class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setUsername(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="mt-4 w-[80%] ml-[10%]">
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Password</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input 
                                name="password" 
                                type="password" 
                                class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"
                                onChange={(e) => {setPassword(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="flex w-full text-red-500 mt-2 pl-10">
                            {errMessage}
                        </div>
                        <div className="flex w-full mt-10 flex-col justify-center items-center">
                            <button 
                            className="items-center font-bold bg-pink-300 text-white py-3 px-9 hover:bg-white border-pink-300 hover:text-pink-300 rounded-lg dark:bg-blue-400 dark:text-zinc-600 dark:hover:bg-white border-[0.5px] dark:border-blue-400 dark:hover:text-blue-400 duration-500"
                            onClick={handleSubmitLogin}>
                                <p>Enter</p>
                            </button>
                        </div>
                    </div>

                    <div className=" text-sm text-center mt-4 text-pink-300 dark:text-blue-400 duration-1000 ">
                        <p className="cursor-pointer hover:opacity-70">Forgot your password?</p> 
                    </div>

                    <div className=" text-sm text-center mt-4 text-pink-300 dark:text-blue-400 duration-1000 ">
                        <Link to="/register">
                            <p className="cursor-pointer hover:opacity-70">Create an account</p>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default LoginContent;