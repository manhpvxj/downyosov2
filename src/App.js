import { Routes, Route} from 'react-router-dom';
import { Home, Register, Login, Profile} from './views/index';
import './App.css';

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:user" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
