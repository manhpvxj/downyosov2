import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiLink } from "react-icons/hi";
import axiosClient from "../../api/axiosClient";

const EditProfileContent = () => {
    const { user } = useParams();
    const [userData, setUserData] = useState({});
    const [avatar, setAvatar] = useState(userData.avatar);
    const onFileChange = (e) => {
      // Updating the state
      const file = e.target.files[0];
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    };
    const navigate = useNavigate();
    useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get(`/users/${user}/edit`);
        setUserData(res);
      } catch (error) {

        navigate(`/u/${user}`);
        alert(error);
      }
    };
    fetchData();
    }, [navigate, user]);

    const handleEditProfile = async () => {
        try {
            const formData = new FormData();
            formData.append("avatar", avatar);
            const resImg = await axiosClient.post(`/users/${user}/edit/upload`, formData);
            await axiosClient.post(`/users/${user}/edit`,{...userData, avatar : resImg.url});
            navigate("/u/" + user);
        }
        catch (e) {
            navigate("/news")
            console.log(e);
        }
    }
    return ( 
      <div className="relative max-w-md mx-auto top-28 md:max-w-2xl md:mt-6 min-w-0 break-words dark:bg-zinc-100 bg-zinc-800 w-full mb-6 dark:border-blue-500 border-pink-300 border-2 rounded-xl mt-16">
        <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
                </div>
            </div>
            <div className="w-full text-center mt-10">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide dark:text-slate-700 text-zinc-400">{userData.posts}</span>
                        <span className="text-sm dark:text-slate-400 text-zinc-200">Posts</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide dark:text-slate-700 text-zinc-400">{userData.followers}</span>
                        <span className="text-sm dark:text-slate-400 text-zinc-200">Followers</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="text-center mt-2">
            <div className="flex items-center justify-center m-auto w-16 h-16">
                <img src={avatar ? avatar.preview : userData.avatar} alt="avatar" className="rounded-full"/>
            </div>
            <div className="mt-2">
                <label>
                    <span className="cursor-pointer dark:text-slate-700 text-zinc-200">Choose file</span>
                    <input name="avatar" type="file" encType="multipart/form-data" className="hidden" onChange={onFileChange}></input>
                </label>
            </div>
            <h3 className="text-2xl dark:text-slate-700 text-zinc-200 font-bold leading-normal mb-1">@{userData.username}</h3>
        </div>
        <div className="mt-6 py-6 border-t border-pink-300 dark:border-blue-500 text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                    <input name="input" type="text" className="font-normal text-center text-zinc-200 dark:text-slate-700 mb-4 dark:bg-zinc-100 bg-zinc-800 " value={userData.description} onChange={(e) => {setUserData({...userData, description: e.target.value})}}></input>
                </div>
                <ul className=" relative mr-[30%]">
                    <li className="flex flex-row">
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                        <input name="facebook" value={userData.web1} type="text" placeholder="Enter your link" className="ml-4 w-auto h-4 text-sm rounded-sm border-[0.5px] border-pink-300 dark:border-blue-500" onChange={(e) => {setUserData({...userData, web1: e.target.value})}}></input>
                    </li>
                    <li className="flex flex-row pt-4">
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                        <input name="github" type="text" placeholder="Enter your link" className="ml-4 w-auto h-4 rounded-sm text-sm border-[0.5px] border-pink-300 dark:border-blue-500" value={userData.web2} onChange={(e) => {setUserData({...userData, web2: e.target.value})}}></input>
                    </li>
                    <li className=" flex flex-row pt-4">
                        <HiLink size={"16px"} className="text-white dark:text-blue-500"></HiLink>
                        <input name="discord" type="text" placeholder="Enter your link" className="ml-4 w-auto h-4 rounded-sm text-sm border-[0.5px] border-pink-300 dark:border-blue-500" value={userData.web3} onChange={(e) => {setUserData({...userData, web3: e.target.value})}}></input>
                    </li>
                </ul>
            </div>
            <div className="w-full mt-10 justify-center items-center">
                <button 
                    className="items-center font-bold bg-pink-300 text-white py-1 px-6 rounded-lg dark:bg-blue-400 dark:text-zinc-600 hover:opacity-80" 
                    onClick={handleEditProfile}>
                    <p>Submit</p>
                </button>
            </div>
        </div>
    </div>
</div>
    );
}
 
export default EditProfileContent;