import { useState } from "react";
import {CgSun} from "react-icons/cg"
import {RiUser3Fill} from "react-icons/ri"
import {VscClose} from "react-icons/vsc"
import {BsMoonStars} from "react-icons/bs"
import useDarkMode from "../../useDarkMode";
const NavBar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const handleMenu = () => {
        setOpenMenu(!OpenMenu);
    }
    return ( 
        <nav className="flex items-center flex-row">
            <div className=" pl-4 flex items-center">
                <div className="flex">
                    {isDarkMode ? (
                    <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer dark:bg-blue-400 duration-1000" onClick={() => toggleDarkMode(!isDarkMode)}>
                        <CgSun size={"20px"} color={"white"} className="hover:opacity-50 duration-500" />
                    </div>) : (
                        <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)}>
                        <BsMoonStars size={"20px"} color={"black"} className="hover:opacity-50 duration-500" />
                    </div>
                    )
                    }
                    <div className="hover:opacity-70 cursor-pointer">
                        <p className="font-extrabold text-xl text-pink-300 dark:text-blue-400 duration-1000">Downyo</p>
                        <p className="font-medium text-sm text-white dark:text-zinc-500">Let's show your personality</p>
                    </div>
                </div>
            </div>
            <ul className="ml-auto mr-4 w-11 h-11 rounded-full bg-pink-300 dark:bg-blue-400 duration-1000 flex items-center justify-center">
                {OpenMenu ? (
                <div className="flex items-center justify-center hover:opacity-50 duration-500" onClick={handleMenu}>
                <VscClose size={"28px"} color={"white"}/>
                </div>)
                :(
                    <div className="flex items-center justify-center hover:opacity-50 duration-500 " onClick={handleMenu}>
                    <RiUser3Fill size={"26px"} color={"white"}/>
                </div>
                )}
                {OpenMenu && (
                    <div className=" absolute right-8 top-20 bg-zinc-700 dark:bg-zinc-300 rounded-md text-start p-2">
                        <li className=" flex menu_list cursor-pointer">
                            <RiUser3Fill size={"12px"} className="m-1 mt-[6px]"/>
                            <span>Get started</span>
                        </li>
                        <li className="flex menu_list ml-1 cursor-pointer">Already have an account?</li>
                    </div>
                )}
            </ul>
        </nav>
     );
}
 
export default NavBar;