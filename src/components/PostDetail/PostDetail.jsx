import axiosClient from "../../api/axiosClient";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import dayjs from "dayjs";
const PostDetail = () => {
    const [postData, setPostData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const [isLiked, setLiked] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const handleLike = (isLike) => {
      setLiked(!isLike);
    }
    useEffect( () => {
        const fetchData = async () => {
            try {
              const res = await axiosClient.get(`/posts/${id}`);
              setPostData(res);
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
            <div className="mx-auto w-[40%] mt-4">
                <input type="text" name="comment" placeholder="Add a comment...." />
            </div>
        {
            postData.comments.map((comment, index) => {
                return (
                    <div className="mx-auto mt-8 border-[0.5px] md:w-[40%] w-80% dark:border-blue-500 border-pink-300 rounded-lg" key={index}>
                        <Link to={`/u/${comment.author}`} className="ml-2">{comment.author}</Link>
                        <p className="ml-4">{comment.content}</p>
                    </div>
                )
            }) 
        }
        </div>)
    )
}
 
export default PostDetail;