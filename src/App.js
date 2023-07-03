
import './App.css';
import Product from './Pages/ProductPage';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import NavBar from './Component/NavBar';


function App() {
  return (
     <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:val/:id' element={<Product />} />

      </Routes>
    </div>
  );
}

export default App;
