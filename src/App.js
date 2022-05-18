import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import Todos from './Pages/Todos/Todos';

function App() {
  return (
    <div className=' max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='todos' element={<RequireAuth><Todos /></RequireAuth>} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
