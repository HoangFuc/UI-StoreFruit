import './App.css';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './Product/ProductDetail';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/login" Component={Login} ></Route>
            <Route path="/" Component={Home}></Route>
            <Route path="/home" Component={Home} exact></Route>
            <Route path="/home/:validate" Component={Home}></Route>
            {/* <Route path='/productdetail' Component={ProductDetail} exact /> */}
            <Route path='/productdetail/:id/:name/:price/:code/:status' Component={ProductDetail} />
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
