import NavBar from "../components/NavBar/NavBar";
import LoginMiddle from "../components/LoginMiddle/LoginMiddle"
function Login() {
    return (
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
            <NavBar/>
            <LoginMiddle/>
        </div>
     );
}

export default Login;