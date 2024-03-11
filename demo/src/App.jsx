
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Gallery from './components/gallery/Gallery';
import Notice from './components/notice/Notice';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Contact from './components/admission/contact';
// import Enquiry from './components/enquiry/enquiry';
import Certificate from './components/certificate/Certificate';
import Successfull from './components/successful/successful';
import Enquiry from './components/enquiry/enquiry';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="notice" element={<Notice />} />
          <Route path='login' element={<Login />} />
          <Route path='enquiry' element={<Enquiry />} />
          <Route path='certification' element={<Certificate />} />
          <Route path='thank-you' element={<Successfull />} />
        </Routes>
        <Footer />
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