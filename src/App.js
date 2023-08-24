//for routes configure import 2 components Routes and Route

import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';


function App() {
  return (
    <>
    <Navbar />
      {/* in jsx add Routes component within which we define indevidual route using Routecomponent */}
      {/* Route component has 2 props path and element to be rendered */}
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='about' element = {<About />} />
        <Route path='Order-Summary' element = {<OrderSummary />} />
      </Routes>
    </>
      
      
    
  );
}

export default App;
