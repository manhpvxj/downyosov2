import { useState } from "react";
import { Link } from "react-router-dom";
import {CgSun} from "react-icons/cg";
import {RiUser3Fill} from "react-icons/ri";
import {VscClose} from "react-icons/vsc";
import {BsMoonStars} from "react-icons/bs"
import useDarkMode from "../../useDarkMode";
const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return ( 
        <nav className="flex items-center flex-row">
            <div className=" pl-4 flex items-center">
                <div className="flex">
                    {isDarkMode ? (
                    <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer dark:bg-blue-400" onClick={() => toggleDarkMode(!isDarkMode)}>
                        <CgSun size={"20px"} color={"white"} className="hover:opacity-50 " />
                    </div>) 
                    : (
                        <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)}>
                        <BsMoonStars size={"20px"} color={"black"} className="hover:opacity-50" />
                    </div>
                    )
                    }
                    <Link to="/">
                        <div className="hover:opacity-70 cursor-pointer hidden md:block">
                            <p className="font-extrabold text-xl text-pink-300 dark:text-blue-400 ">Downyo</p>
                            <p className="font-medium text-sm text-white dark:text-zinc-500">Let's show your personality</p>
                        </div>
                    </Link>
                </div>
            </div>
            <ul className="ml-auto mr-4 w-11 h-11 rounded-full bg-pink-300 dark:bg-blue-400  flex items-center cursor-pointer justify-center z-10">
                {openMenu ? (
                <div className="flex items-center justify-center hover:opacity-50 " onClick={handleMenu}>
                <VscClose size={"28px"} color={"white"}/>
                </div>)
                :(
                    <div className="flex items-center justify-center hover:opacity-50 " onClick={handleMenu}>
                    <RiUser3Fill size={"26px"} color={"white"}/>
                </div>
                )}
                {openMenu && (
                    <div className=" absolute right-8 top-20 bg-zinc-700 dark:bg-zinc-300 rounded-md text-start p-2 ease-in-out">
                        <li>
                            <Link to="/register">
                                <div className=" flex menu_list cursor-pointer">                         
                                    <RiUser3Fill size={"14px"} className="m-1 mt-[5.5px]"/>
                                    <span>Get started</span>
                                </div>  
                            </Link> 
                        </li>
                        <li className="flex menu_list pl-1 cursor-pointer">
                            <Link to="/login">
                                <p>Already have an account?</p>
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
     );
}
 
export default NavBar