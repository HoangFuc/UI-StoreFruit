import './App.css';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Login} ></Route>
            <Route path="/home" Component={Home}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
