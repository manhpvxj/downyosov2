import NavBar from "../components/NavBar/NavBar";
import RegisterMiddle from "../components/RegisterMiddle/RegisterMiddle";
function Register() {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
            <NavBar/>
            <RegisterMiddle/>
        </div>
     );
}

export default Register;