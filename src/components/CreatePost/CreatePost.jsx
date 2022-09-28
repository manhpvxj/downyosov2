import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import TextareaAutosize from '@mui/base/TextareaAutosize';


const CreatePost = () => {
    const [content, setContent] = useState();
    const [userData, setUserData] = useState({});
    const handleCreatePost = async () => {
        if(content) {
            try {
                await axiosClient.post(`/${localStorage.getItem("username")}/posts/create`, {content}); 
                setContent("");          
            }
            catch (e) {
                alert(e.response.data);
                console.log(e);
            }
        }
    }
    useEffect( () => {
        const fetchData = async () => {
        const res = await axiosClient.get(`/users/${localStorage.getItem("username")}`);

        setUserData(res);
        }
        fetchData();
    }, [])
    return ( 
            <div className=" relative text-white border-2 border-pink-300 dark:border-blue-500 rounded-lg mt-28 w-[90%] mx-auto md:w-[50%]">
            <div className="flex m-1">
                <img src={userData.avatar} alt="avatar" className="w-10 h-10 rounded-full"></img>
                <p className="ml-1 dark:text-zinc-700">
                Hello {userData.username}.<br></br> What's on your mind?
                </p>
            </div >
            <div className="ml-2 mb-2">
                <TextareaAutosize name="content" placeholder="Write something" className="bg-zinc-800 dark:bg-zinc-100 text-slate-300 dark:text-zinc-800 placeholder-zinc-600 w-[80%] " value={content} onChange={(e) => {setContent(e.target.value)}}></TextareaAutosize>
                <button className="absolute right-2 bottom-1 text-white dark:bg-blue-500 px-2 py-1 rounded-md bg-pink-300" onClick={handleCreatePost}>Post</button>
            </div>
            </div>
     );
}
 
export default CreatePost;