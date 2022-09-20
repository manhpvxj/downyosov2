
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
const NewsFeed = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
    const fetchData = async () => {
        const postsData = [];
        const res = await axiosClient.get("/news");
        res.forEach((e) => {
          postsData.push(e);
        })
        setData(postsData);
    }
    fetchData(); 
    }, []);
    return ( 
        data.map((post) => {
          return <div>
          <div className=" border-2 border-pink-300 rounded-lg mt-28 w-[90%] mx-auto md:w-[50%]">
            <div className="text-white text-2xl m-1" >
              <div className="flex items-center">
                <img src={post.author.avatar} alt="avatar" className=" w-10 h-10 rounded-full"></img>
                <div className=" pl-1 ">
                <p className=" text-base">{post.author.username}</p>
                <p className="block text-sm">{dayjs(post.updatedAt).locale('vi').format("DD MMM")}</p>
                </div>
              </div>
              <p className="mt-1 ml-1">{post.content}</p>
            </div>
          </div>
        
        <div>
        <div className="flex text-sm text-white ml-4 md:items-center md:justify-center">
          <span>{post.likes.length} Likes</span>
          <span className="pl-4">{post.comments.length} Comments</span>
          <Link to={`/posts/${post._id}`} className="pl-4">Go to post</Link>
        </div>
        </div>
        </div>
      })
    );
}
 
export default NewsFeed;