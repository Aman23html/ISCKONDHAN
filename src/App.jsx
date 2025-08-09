import './118'; // 👈 import here
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page components
import About from './pages/About';
import Gallery from './pages/Gallery';
import Media from './pages/Media';
import ConnectUs from './pages/ContactUs';
import Services from './pages/Services';

// Shared components
import Hero from './components/Hero/Hero';
import HeroTop from './components/Hero/HeroTop';
import HeroVid from './components/Hero/HeroVid';
import Broadcast from './components/Schedule/Broadcast';
import Isckonmessage from './components/IsckonMessage/Isckonmessage';
import Poster from './components/poster/Poster';
import BannerOne from './components/banner/BannerOne';
import Donation from './components/Donation/Donation';
import BannerTwo from './components/banner/BannerTwo';
import Courses from './components/Courses/Courses';
import SocialMedia from './components/SocialMedia/SocialMedia';
import FootTop from './components/Footer/FootTop/FootTop';
import Footer from './components/Footer/FootTop/Footer';


// Donation nested routing components
import DonationLayout from './pages/donation/DonationLayout';
import TempleConstruction from './components/Dontionmenu/TempleConstruction';
import AnnaDaan from './components/Dontionmenu/AnnaDaan';
import GitaDaan from './components/Dontionmenu/GitaDaan';
import TribalCare from './components/Dontionmenu/TribalCare';
import VaishnavSeva from './components/Dontionmenu/VaishnavSeva';
import NityaSeva from './components/Dontionmenu/NityaSeva';
import FestivalSupport from './components/Dontionmenu/FestivalSupport';

import DonationPaymentPage from './pages/donation/DonationPaymentPage';
import YouthCourse from './components/CoursesOffer/YouthCourse';
import GitaClasses from './components/CoursesOffer/GitaClasses';
import SundayFeast from './components/CoursesOffer/SundayFeast';
import DonationForm from './components/DonationForm';


const App = () => {
  return (
    <Router>
      <HeroTop />
      <Hero />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroVid />
              <Broadcast />
              <Isckonmessage />
              <Poster />
              <BannerOne />
              <Donation />
              <BannerTwo />
              <Courses />
              <SocialMedia />
            </>
          }
        />

        {/* Static pages */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ConnectUs />} />
        <Route path="/services" element={<Services />} />

         {/* Course Offerings */}
          <Route path="/courses/youth" element={<YouthCourse />} />
          <Route path="/courses/gita" element={<GitaClasses />} />
          <Route path="/courses/sunday-fest" element={<SundayFeast />} />


        {/* Donation nested routes */}
        <Route path="/donate" element={<DonationLayout />}>
          <Route path="/donate/temple-construction" element={<TempleConstruction />} />
          <Route path="/donate/anna-daan" element={<AnnaDaan />} />
          <Route path="/donate/gita-daan" element={<GitaDaan />} />
          <Route path="/donate/tribal-care-seva" element={<TribalCare />} />
          <Route path="/donate/vaishnava-seva" element={<VaishnavSeva />} />
          <Route path="/donate/nitya-seva" element={<NityaSeva />} />
          <Route path="/donate/festival-support" element={<FestivalSupport />} />


          {/* Donation payment page */}
          <Route path="/donate/payment/:sevaName/:amount" element={<DonationPaymentPage />} />
          <Route path="/donate/form" element={<DonationForm />} />


         

        </Route>
      </Routes>

      <FootTop />
      <Footer />
    </Router>
  );
};

export default App;
