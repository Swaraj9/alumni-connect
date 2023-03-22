import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import AdminDashboard from './pages/AdminDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TeacherDashboard from './pages/TeacherDashboard';
import UploadLOA from './pages/uploadloa';

function App() {
  const {user, isAuthenticated} = useContext(AuthContext)
  console.log(user);
  console.log(isAuthenticated);
  return (
    <div className="App">
        <UploadLOA />
    </div>
  );
}

export default App;
