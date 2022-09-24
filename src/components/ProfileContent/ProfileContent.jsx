
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { HiLink } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";

const ProfileContent = () => {
    const { user } = useParams();
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const userCheck = user === localStorage.getItem("username");
  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get("/users/" + user);
        setUserData(res);
      } catch (error) {
        navigate("/login");
        alert(error);
      }
    };
    fetchData();
  }, [navigate]);
    return ( 
      <div class="relative max-w-md mx-auto md:max-w-2xl md:mt-6 min-w-0 break-words dark:bg-zinc-100 bg-zinc-800 w-full top-28 dark:border-blue-500 border-pink-300 border-2 rounded-xl mt-16 duration-1000">
        <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                </div>
            </div>
            {userCheck ? (<div className="flex absolute top-4 right-4 w-[30px] h-[30px] rounded-lg bg-pink-300 dark:bg-blue-400 items-center justify-center">
                <Link to={`/u/${localStorage.getItem("username")}/edit`}>
                    <div className=" ml-1 bg-pink-300 dark:bg-blue-400 text-white hover:opacity-70">
                        <FaUserEdit size={"20px"}></FaUserEdit>
                    </div>
                </Link>
            </div>) : (
                <></>
            )}
            <div class="w-full text-center mt-10">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide dark:text-slate-700 text-zinc-400">{userData.posts}</span>
                        <span class="text-sm dark:text-slate-400 text-zinc-200">Posts</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide dark:text-slate-700 text-zinc-400">{userData.followers}</span>
                        <span class="text-sm dark:text-slate-400 text-zinc-200">Followers</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="text-center mt-2">
            <div className="flex items-center justify-center m-auto w-16 h-16">
                <img src={userData.avatar} alt="avatar" className="rounded-full"/>
            </div>
            <h3 class="text-2xl dark:text-slate-700 text-zinc-200 font-bold leading-normal mb-1">@{userData.username}</h3>
        </div>
        <div class="mt-6 py-6 border-t border-pink-300 dark:border-blue-500 text-center duration-1000">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-normal leading-relaxed dark:text-slate-700 text-zinc-200 mb-4">{userData.description}</p>
                </div>
                <ul className="flex">
                    <li>
                        <a href={userData.facebook}>
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                        </a>
                    </li>
                    <li className="pl-4">
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                    </li>
                    <li className="pl-4">
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    );
}
 
export default ProfileContent;