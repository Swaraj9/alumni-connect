import { useContext } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import AdminDashboard from './pages/AdminDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TeacherDashboard from './pages/TeacherDashboard';
import UploadLOA from "./pages/uploadloa";
import Responses from "./pages/Responses";
import TeachCreate from "./pages/TeachCreate";
import PrivateRoute from './PrivateRoute';
import LetterOfAppreciation from "./pages/LoaEmail";
import OngoingTeach from './pages/OngoingTeach';
import EventEnd from './pages/EventEnd';
import LoaEmail from './pages/LoaEmail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/LoaEmail' element={<LetterOfAppreciation/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/alumni" element={<PrivateRoute roles = {['alumni']}><AlumniDashboard/></PrivateRoute>}/>
          <Route path="/teacher" element={<PrivateRoute roles = {['teacher']}><TeacherDashboard/></PrivateRoute>}>
            <Route path='' element={<TeachCreate />} />
            <Route path='responses' element={<Responses />} />
            {/* <Route path='loaupload' element={<UploadLOA />} /> */}
            <Route path='ongoing' element={<OngoingTeach />} />
            <Route path='eventend' element={<EventEnd />} />
            <Route path='loaemail' element={<LoaEmail />} />
          </Route>
          <Route path="/admin" element={<PrivateRoute roles = {['admin']}><AdminDashboard/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
