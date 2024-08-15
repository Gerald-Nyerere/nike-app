import React from 'react';
import { footerLogo } from "../assets/images"
import { socialMedia, footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons';
function Footer() {
  return (
    <footer className='max-container bg-slate-950'>
      <div className='flex justify-between items-center gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Footer Logo" />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest nike store. Find your perfect size in store. Get rewards.</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserratv text-2xl leading-normal font-medium'> {section.title} </h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className='rounded-full m-0' />
          <p>copyrigvht. all rigvht rveservvvvvvvvvvvved.</p>
        </div>
        <p>terms & conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
