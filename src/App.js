import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      <AlumniDashboard />
      {/* <Login /> */}
    </div>
  );
}

export default App;
