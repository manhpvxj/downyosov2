
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
const NewsFeed = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
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
    }, [data,navigate]);
    return ( 
        data.map((post, index) => {
          return <div key={index}>
          <div className=" border-2 border-pink-300 dark:border-blue-500 rounded-lg mt-28 w-[90%] mx-auto md:w-[50%]" >
            <div className="text-white text-2xl m-1 dark:text-zinc-700" >
              <div className="flex items-center">
                <img src={post.author.avatar} alt="avatar" className=" w-10 h-10 rounded-full"></img>
                <div className=" pl-1 ">
                <Link to={`/u/${post.author.username}`} className=" text-base">{post.author.username}</Link>
                <p className="block text-sm">{dayjs(post.createdAt).locale('vi').format("HH:mm DD MMM")}</p>
                </div>
              </div>
              <p className="mt-1 ml-1 w-full break-words">{post.content}</p>
            </div>
          </div>
        
        <div>
        <div className="flex text-sm text-white dark:text-zinc-700 ml-4 md:items-center md:justify-center" key={index}>
        {(post.likes.length < 2) ? (
            <Link to={`/posts/${post._id}`} className="pl-4" >{post.likes.length} Like</Link>)
          : (<Link to={`/posts/${post._id}`} className="ml-1">{post.likes.length} Likes</Link>)
          }
              
          {(post.comments.length < 2) ? (
            <Link to={`/posts/${post._id}`} className="pl-4" >{post.comments.length} Comment</Link>)
          : (<Link to={`/posts/${post._id}`} className="pl-4" >{post.comments.length} Comments</Link>)
          }
        </div>
        </div>
        </div>
      })
    );
}
 
export default NewsFeed;