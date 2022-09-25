import {Link} from 'react-router-dom';
const HomeContent = () => {
    return (
        <div>
            <div className=" mt-32">
                <div className="">
                    <p className="text-center font-extrabold text-3xl text-white leading-8 tracking-tight dark:text-zinc-700">Your Life, Your Rules.</p>
                    <p className="text-center folt-bold text-lg text-zinc-300 dark:text-zinc-700">Manage your identity, brands, and knowledge bases with ease.</p>
                </div>
                <div className="flex w-full mt-20 flex-col justify-center items-center">
                    <button className=" items-center font-bold bg-pink-300 text-white py-3 px-9 hover:bg-white border-pink-300 hover:text-pink-300 rounded-lg dark:bg-blue-400 dark:text-zinc-600 dark:hover:bg-white border-[0.5px] dark:border-blue-400 dark:hover:text-blue-400 ">
                        <Link to="/register">
                        <p>Get started</p>
                        </Link>
                    </button>
                    <Link to="/login" className=" font-medium text-white mt-2 hover:text-pink-300 dark:text-zinc-600 dark:hover:text-blue-400 ">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default HomeContent;