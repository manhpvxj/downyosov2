import { UserNavBar } from "../../components/index"

const UserLayout = ({children}) => {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
            <UserNavBar/>
            <main>{children}</main>
        </div>
     );
}
 
export default UserLayout;