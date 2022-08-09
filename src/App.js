import NavBar from './components/NavBar/NavBar';
import Middle from './components/Middle/Middle';
import './App.css';

function App() {
  return (
    <div className="h-screen overflow-auto bg-zinc-800 px-4 py-8 dark:bg-zinc-100 duration-1000">
    <NavBar/>
    <Middle/>
    </div>
  );
}

export default App;
