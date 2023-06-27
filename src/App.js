import logo from './logo.svg';
import './App.css';
import Profile from './Compnanat/Profile';
import Home from './Compnanat/Home';
import ContactUs from './Compnanat/ContactUs';
import Products from './Compnanat/Products';
import {Route , Routes} from 'react-router-dom';
import Header from './Compnanat/Header';
import Eletronics from './Compnanat/Eletronics';
import MensClothing from './Compnanat/MensClothing';
import Jewelery from './Compnanat/Jewelery';
import WomensClothing from './Compnanat/WomensClothing';





function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
        <Route path='eletronics' element={<Eletronics/>}/>
        <Route path='jewelery' element={<Jewelery/>}/>
        <Route path='Mensclothing' element={<MensClothing/>}/>
        <Route path='WomenClothing' element={<WomensClothing/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
      
     
     
      
    </div>
  );
}

export default App;
