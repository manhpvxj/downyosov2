import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {CgSun} from "react-icons/cg";
import {BsMoonStars} from "react-icons/bs"
import {FaHome} from "react-icons/fa";
import useDarkMode from "../../useDarkMode";
import axiosClient from "../../api/axiosClient";
const UserNavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const handleLogout = () => {
        localStorage.clear();
    }
    const [userData, setUserData] = useState({});

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get(`/users/${localStorage.getItem("username")}`);
        setUserData(res);
      } catch (error) {
      }
    };
    fetchData();
  }, []);
    return ( 
        <nav className="flex items-center flex-row fixed w-[90%] pt-8 bg-zinc-800 dark:bg-zinc-100 z-10">
            <div className=" pl-4 flex items-center mb-8">
                <div className="flex">
                    {isDarkMode ? (
                    <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer dark:bg-blue-400 " onClick={() => toggleDarkMode(!isDarkMode)}>
                        <CgSun size={"20px"} color={"white"} className="hover:opacity-50" />
                    </div>) 
                    : (
                        <div className="flex w-10 h-10 m-1 rounded-full bg-pink-300 items-center justify-center cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)}>
                        <BsMoonStars size={"20px"} color={"black"} className="hover:opacity-50" />
                    </div>
                    )
                    }
                    <Link to="/news">
                        <div className="hover:opacity-70 cursor-pointer hidden md:block">
                            <p className="font-extrabold text-xl text-pink-300 dark:text-blue-400">Downyo</p>
                            <p className="font-medium text-sm text-white dark:text-zinc-500">Let's show your personality</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Link to={"/news"} className=" absolute md:right-24 right-16 top-[36px] text-pink-300 dark:text-blue-500 dark:bg-zinc-200 bg-zinc-600 p-2 rounded-full hover:opacity-80">
                <FaHome size={"26px"}></FaHome>
            </Link>

            <ul className="ml-auto mb-8 mr-4 rounded-full flex items-center cursor-pointer justify-center z-10">
                {openMenu ? (
                    <div>
                        <div className="flex items-center justify-center hover:opacity-50" onClick={handleMenu}>
                        <img src={userData.avatar} alt="avatar" className="w-11 h-11 rounded-full"></img>
                        </div>
                        <div className=" absolute right-8 top-20 bg-zinc-700 dark:bg-zinc-300 rounded-md text-start p-2 ease-in-out">
                        <li className="flex menu_list cursor-pointer">
                            <Link to={`/u/${localStorage.getItem("username")}`}>                       
                                <p>Profile</p>
                            </Link>
                        </li>
                        <li className="flex menu_list cursor-pointer">
                            <Link to="/change-password">
                                <p>Change password</p>
                            </Link>
                        </li>
                        <li className="flex menu_list cursor-pointer">
                            <Link to="/">
                                <p onClick={handleLogout}>Logout</p>
                            </Link>
                        </li>
                    </div>
                </div>)
                :(
                    <div className="flex items-center justify-center hover:opacity-50" onClick={handleMenu}>
                    <img src={userData.avatar} alt="avatar" className="w-11 h-11 rounded-full"></img>
                    </div>
                )}
            </ul>
        </nav>
    )
    };
export default UserNavBar;