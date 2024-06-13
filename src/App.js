import React from 'react';
import './scss/app.scss';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Error from './pages/Error.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
