import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import VerifyOtp from './components/VerifyOtp';
import Welcome from './pages/user/Welcome';
import Dashboard from './pages/admin/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/verifyotp" element={<VerifyOtp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/user/welcome" element={<Welcome/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
