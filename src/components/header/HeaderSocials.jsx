
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

const HeaderSocials = () => {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className='header__socials'>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://github.com" target="_blank"><FaGithub /> </a>
        <a style={{color:darkMode &&  "#4db5ff",}} href="https://dribble.com" target="_blank"><FiDribbble /> </a>
    </div>
  )
}

export default HeaderSocials