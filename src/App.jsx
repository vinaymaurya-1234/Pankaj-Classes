import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Home/Header";
import Mainpage from "./Home/Mainpage";
import Intropage from './Home/Intropage';
import Features_sec from "./Home/Features_sec";
import StatsSection from "./Home/StatsSection";
import Footer from "./Home/Footer";
import Achievements from "./Home/Achievements";
import AboutUs from './About us/AboutUs';
import Admission from './Admission/Admission';
import ContactUs from './Contact us/ContactUs';
import Mycontent from './Courses/Mycontent'; 
import Loginpage from './Login/Loginpage';
import Signup from './Login/Signup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import VideosPage from "./VideosPage";

function App() {
    useEffect(() => {
        AOS.init({ 
            duration: 1200,
            easing: 'ease-out',
            once: true 
        });
    }, []);

    return (
        <>
            <div className="center">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Mainpage />
                            <Intropage />
                            <Features_sec />
                            <StatsSection />
                            <Achievements />
                        </>
                    } />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/admission' element={<Admission />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/courses' element={<Mycontent />} />  {/* ✅ Corrected Route */}
                    <Route path='/login' element={<Loginpage />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/videos/:courseName/:subjectName" element={<VideosPage />} />
                    <Route path="/videos/:courseName/:className/:subjectName" element={<VideosPage />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
