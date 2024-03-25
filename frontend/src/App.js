import './style.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoggedIn from './pages/LoggedIn';
import Home from './pages/Home';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> }/>
          <Route path="/signup" element={ <Signup /> } />
          <Route path='/loggedin' element={ <LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
