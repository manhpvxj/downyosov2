import axiosClient from "../../api/axiosClient";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import dayjs from "dayjs";
const PostDetail = () => {
    const [postData, setPostData] = useState({});
    const [userData, setUserData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState();
    const [isLiked, setLiked] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const handleLike = (isLike) => {
      setLiked(!isLike);
    }
    const handlePostComment = async () => {
      try {
        await axiosClient.post(`/posts/${id}/comment`, {content} );
        window.location.reload();
      }
      catch(e) {
        navigate(`/posts/${id}`);
        console.log(e);
      }
    }
    useEffect( () => {
        const fetchData = async () => {
            try {
              const res = await axiosClient.get(`/posts/${id}`);
              const user = await axiosClient.get(`/users/${localStorage.getItem("username")}`);
              setPostData(res);
              setUserData(user);
              setLoading(false);
            } catch (error) {
              navigate("/news");
              console.log(error);
            }
          };
        fetchData();
    },[id, navigate]);
    return ( 
        isLoading ? (<div>Loading.....</div>) : (<div>
            <div className=" border-2 border-pink-300 dark:border-blue-500 rounded-lg mt-28 w-[90%] mx-auto md:w-[50%]" >
            <div className="text-white text-2xl m-1 dark:text-zinc-700" >
              <div className="flex items-center">
                <img src={postData.author.avatar} alt="avatar" className=" w-10 h-10 rounded-full"></img>
                <div className=" pl-1 ">
                <Link to={`/u/${postData.author.username}`} className=" text-base">{postData.author.username}</Link>
                <p className="block text-sm">{dayjs(postData.updatedAt).locale('vi').format("DD MMM")}</p>
                </div>
              </div>
              <p className="mt-1 ml-1">{postData.content}</p>
            </div>
            </div>
            <div className="flex text-sm text-white dark:text-zinc-700 ml-4 md:items-center md:justify-center">
            {isLiked ? (
              <div className="flex items-center cursor-pointer" onClick={handleLike}>
              <AiTwotoneHeart></AiTwotoneHeart>
              <span className="ml-1">{postData.likes.length} Likes</span>
              </div>
            ) : (
              <div className="flex items-center cursor-pointer" onClick={handleLike}>
              <AiOutlineHeart></AiOutlineHeart>
              <span className="ml-1">{postData.likes.length} Likes</span>
              </div>
            )}           
          <Link to={`/posts/${postData._id}`} className="pl-4" >{postData.comments.length} Comments</Link>
        </div>
            <div className="flex mx-auto items-center justify-center mt-10">
                <img src={userData.avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
                <div className="mt-2 ml-2">
                    <TextareaAutosize name="content" placeholder="Add a comment...." className="dark:bg-zinc-200 bg-zinc-600" value={content} onChange={(e) => {setContent(e.target.value)}}/>
                </div>
                <button className="bg-pink-300 dark:bg-blue-500 text-white rounded-lg px-3 py-1 ml-4 hover:opacity-80" onClick={handlePostComment}>Post</button>
            </div>
        {
            Array.from(postData.comments).reverse().map((comment, index) => {
                return (
                    <div className="mx-auto mt-8 leading-6 md:w-[40%] w-80% dark:bg-zinc-200 bg-zinc-600 dark:text-slate-800 text-slate-300 rounded-lg" key={index}>
                        <div className="flex">
                          <img src={comment.avatar} alt="avatar" className="w-8 h-8 rounded-full m-1"/>
                          <div className="block">
                            <Link to={`/u/${comment.author}`} className="ml-2">{comment.author}</Link>
                            <div className="ml-2">{dayjs(comment.updatedAt).locale('vi').format("HH:mm DD MMM")}</div>
                          </div>
                        </div>
                        <p className="ml-[10%]">{comment.content}</p>
                    </div>
                )
            }) 
        }
        </div>)
    )
}
 
export default PostDetail;