import { NewsFeed, CreatePost } from "../components/index";
const News = () => {
    const isLoggedin = localStorage.getItem("token");
    return ( 
        <>
        {isLoggedin ? (<CreatePost />) : (<></>)}
        
        <NewsFeed />
        </>
     );
}
 
export default News;