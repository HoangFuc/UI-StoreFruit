import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './Product/ProductDetail';
import Cart from './Cart/Cart';
import OrderDetail from './Order-detail/Order-detail';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Login} ></Route>
            <Route path="/home" Component={Home} exact></Route>
            <Route path='/productdetail/:id/:name/:price/:code/:status' Component={ProductDetail} />
            <Route path='/cart' Component={Cart} />
            <Route path='/cart/order-details' Component={OrderDetail} />
            <Route path='/profile' Component={Profile} />
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
