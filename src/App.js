import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import SearchPage from './pages/searchPage';
import WishlistPage from './pages/WishlistPage';
import NavbarComponent from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
