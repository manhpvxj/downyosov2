import {NavBar, HomeContent} from '../components/index';
const Home = () => {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
            <NavBar/>
            <HomeContent/>
        </div>
     );
}
 
export default Home;