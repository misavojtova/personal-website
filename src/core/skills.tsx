import { VscGithub } from 'react-icons/vsc';
import { AiFillHtml5, AiFillGitlab } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiRedux, SiTypescript } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

export const skills = [
  { title: 'HTML', icon: <AiFillHtml5 className='hover:text-[#e34c26]' />, key: 1 },
  { title: 'CSS', icon: <IoLogoCss3 className='hover:text-[#0072bc]' />, key: 2 },
  { title: 'JavaScript', icon: <IoLogoJavascript className='hover:text-[#f7e018]' />, key: 3 },
  { title: 'React', icon: <IoLogoReact className='hover:text-[#00d1f7]' />, key: 4 },
  { title: 'Redux', icon: <SiRedux className='hover:text-[#7248b6]' />, key: 5 },
  { title: 'TypeScript', icon: <SiTypescript className='hover:text-[#3178C6]' />, key: 6 },
  { title: 'Git', icon: <FaGitAlt className='hover:text-[#f1502f]' />, key: 7 },
  { title: 'GitHub', icon: <VscGithub className='hover:text-black' />, key: 8 },
  { title: 'GitLab', icon: <AiFillGitlab className='hover:text-[#e2432a]' />, key: 9 },
];
