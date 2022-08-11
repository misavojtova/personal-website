import React from 'react';
import 'tailwind.css';
import { SkillBox } from 'pages/about/components/SkillBox';

const About = () => {
  return (
    <div className='he flex h-full w-full items-end justify-center'>
      <SkillBox />
      {/* <div className='cm-flex-col'>
        <h5>About me</h5>
        <h5>Hello and Thank you for reading a little bit about me</h5>
        <h6>
          I'm a freelance Front-end React Developer originally from Czech Republic, but working
          remote in EU countries with my current location in Lisbon, Portugal. I started my
          developer journey in 2020 when I learned the basics of programming and created my first
          web application from scratch with the help of Green Fox Academy and their 3 week course.
          Their structure helped me to get familiar with HTML, CSS, JavaScript, Git and GitHub.
          After that I studied multiple courses about modern JavaScript (ES6+), HTML/CSS Flexbox,
          and CSS Grid on Udemy and YouTube.
        </h6>
        In 2021 I joined an intensive full-time web development course in Lisbon at Wild Code School
        and completed 700 hours. I participated in building multiple projects in teams using latest
        technologies with primary focus on Front-end Development, however I'm familiar with Node.js,
        Express.js, MySQL and REST API. Throughout studies at Wild Code School I took part in three
        months remote internship at IDUN technologies and together with my classmates we built a
        prototype for testing brain activities.
      </div> */}
    </div>
  );
};

export default About;
