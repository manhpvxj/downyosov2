
import {NavBar, RegisterContent } from '../components/index';
function Register() {
    return ( 
        <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
            <NavBar/>
            <RegisterContent/>
        </div>
     );
}

export default Register;