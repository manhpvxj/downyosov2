import { UserNavBar } from "../../components/index"

const UserLayout = ({children}) => {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 dark:bg-zinc-100">
            <UserNavBar/>
            <main>{children}</main>
        </div>
     );
}
 
export default UserLayout;