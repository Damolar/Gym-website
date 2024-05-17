
import './App.css';
import Aboutus from './components/aboutus';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Service from './components/service';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/service' element={<Service/> }/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


