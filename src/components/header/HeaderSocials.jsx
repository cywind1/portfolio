import React from 'react';
import {SiLinkedin} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com"><SiLinkedin/></a>
        <a href="https://github.com"><SiGithub/></a>        
    </div>
  )
}

export default HeaderSocials