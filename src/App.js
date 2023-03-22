import { useContext } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import AdminDashboard from './pages/AdminDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/alumni">Alumni</NavLink>
        <NavLink to="/teacher">Teacher</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path="/alumni" element={<AlumniDashboard/>}/>
          <Route path="/teacher" element={<TeacherDashboard/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
