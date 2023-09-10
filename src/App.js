import './App.css';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Login} ></Route>
            <Route path="/home" Component={Home}></Route>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
