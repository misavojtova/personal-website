import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArrowRoute from 'core/components/ArrowRoute';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import 'tailwind.css';
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Portfolio from 'pages/portfolio';
import Experience from 'pages/experience';
import Education from 'pages/education';
import Navbar from 'pages/navbar/Index';
import Background from 'core/components/Background';

const App = () => {
  return (
    <div className='text-white'>
      <BrowserRouter>
        <Background>
          <Navbar />
          <div className='flex h-[92vh] items-center justify-center'>
            <ArrowRoute left className='left-[2%]' icon={faAngleDoubleLeft} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/education' element={<Education />} />
            </Routes>
            <ArrowRoute right className='right-[2%]' icon={faAngleDoubleRight} />
          </div>
        </Background>
      </BrowserRouter>
    </div>
  );
};

export default App;
