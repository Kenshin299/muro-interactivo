import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
      </BrowserRouter>
        </div>
    // <div className="App">
    //   <NavBar />
    //   <MainPage />
    // </div>
  );
}

export default App;
