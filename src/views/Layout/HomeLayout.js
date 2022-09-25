import { NavBar } from "../../components/index"

const HomeLayout = ({children}) => {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100">
            <NavBar/>
            <main>{children}</main>
        </div>
     );
}
 
export default HomeLayout;