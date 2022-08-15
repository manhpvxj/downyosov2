import { Link } from "react-router-dom";
const RegisterMiddle = () => {
    return (
        <div>
            <div className=" flex items-center p-4 py-8 m-auto bg-zinc-800 dark:bg-zinc-100 duration-1000 sm:p-8">
                <form className="py-4 mx-auto w-96">
                    <h1 className="text-center font-extrabold text-4xl text-white leading-8 tracking-tight dark:text-zinc-700">Register</h1>
                    <div className="items-center justify-center mt-10">
                        <div>
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Username</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input name="username" autocapitalize="none" type="text" class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"/>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Email</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input name="email" autocapitalize="none" type="text" class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"/>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Password</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input name="password" autocapitalize="none" type="password" class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"/>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div class="flex flex-row items-center justify-between">
                                <label class="block text-md text-left font-medium text-zinc-400 dark:text-zinc-800" for="input">Confirm password</label>
                            </div>
                            <div class="relative flex mt-1 shadow">
                                <input name="passwordcf" autocapitalize="none" type="password" class="block w-full rounded bg-zinc-700 text-zinc-400 placeholder-zinc-600 border-pink-300 border-2 dark:border-blue-400 dark:bg-zinc-200 dark:text-zinc-800"/>
                            </div>
                        </div>

                        <div className="flex w-full mt-10 flex-col justify-center items-center">
                            <button className="items-center font-bold bg-pink-300 text-white py-3 px-9 hover:bg-white border-pink-300 hover:text-pink-300 rounded-lg dark:bg-blue-400 dark:text-zinc-600 dark:hover:bg-white border-[0.5px] dark:border-blue-400 dark:hover:text-blue-400 duration-500">
                                <p>Register</p>
                            </button>
                        </div>
                    </div>
                    
                    <div className=" text-sm text-center mt-4 text-pink-300 dark:text-blue-400 duration-1000 ">
                        <Link to="/login">
                            <p className="cursor-pointer hover:opacity-70">Already have an account?</p> 
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default RegisterMiddle