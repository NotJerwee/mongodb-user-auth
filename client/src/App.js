import { Routes, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Account from "./pages/account";


function App() {

  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {isUserSignedIn && <Route path="/account" element={<Account />} />}
      </Routes>
    </div>
  );
}

export default App;
