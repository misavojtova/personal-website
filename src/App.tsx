import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArrowRoute from 'core/components/ArrowRoute';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { LEFT_ARROW, RIGHT_ARROW } from 'core/config/configSize';
import 'tailwind.css';
import MainContainer from 'core/components/MainContainer';
import ContentContainer from 'core/components/ContentContainer';
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Projects from 'pages/projects';
import Navbar from 'core/components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar />
        <ContentContainer>
          <ArrowRoute left placement={LEFT_ARROW} icon={faAngleDoubleLeft} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
          <ArrowRoute right placement={RIGHT_ARROW} icon={faAngleDoubleRight} />
        </ContentContainer>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
