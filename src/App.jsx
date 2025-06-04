import './App.css'
import Header from './component/Header'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from './component/Home'
import Footer from './component/Footer';
import Appointment from './component/Appointment';
import About from './component/About';
import Service from './component/Service';
import Gallery from './component/Gallery';
import Contact from './component/Contact';

function App() {

  return (
   <div>
    <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes> 
    <Footer/>
    </Router>
   </div>
  )
}

export default App
