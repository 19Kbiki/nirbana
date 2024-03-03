
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './componnets/Home/Home';
import Navbar from './componnets/Navbar/Navbar';
import Footer from './componnets/Footer/Footer';
import Login from './componnets/Login/Login';
import Admission from './componnets/Admission/contact';
import Gallery from './componnets/Gallery/Gallery';
import Notice from './componnets/Notice/Notice';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Contact from './componnets/Admission/contact';
import Qurry from './componnets/Qurry/Qurry';
import Certificate from './componnets/Certificate/Certificate';
import Successfull from './componnets/successfull/successfull';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar/>
          <ScrollToTop />
          <Routes>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="notice" element={<Notice />} />

              {/* <Route path="*" element={<NoPage />} /> */}
              <Route path='login' element={<Login />}/>
              <Route path='enquiry' element={<Qurry />}/>
              <Route path='certification' element={<Certificate />}/>
              <Route path='thank-you' element={<Successfull />}/>



          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}