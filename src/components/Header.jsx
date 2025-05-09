import PropTypes from 'prop-types'
import React from 'react'
import downloadFile from '../assets/document/divyangi-mahajan.pdf'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BsMedium } from 'react-icons/bs';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Divyangi Mahajan</h1>
        <p>
          Coding The Future
        </p>
        <ul className="icons">
          <li title = {'linkedin.com/in/divyangi-mahajan'} >
            <a href="https://www.linkedin.com/in/divyangi-mahajan"><FaLinkedinIn size={17} style={{ verticalAlign: 'sub' }} aria-label="Linkedin"/></a>
          </li>
          <li title={'github.com/divyangi-mhjn'}>
            <a href="https://www.github.com/divyangi-mhjn" ><FaGithub size={17} style={{ verticalAlign: 'sub' }} aria-label="github" /></a>
          </li>
          <li title= {'medium.com/@MahajanInsights'}>
            <a href="https://medium.com/@MahajanInsights" ><BsMedium size={17} style={{ verticalAlign: 'sub' }} aria-label="github" /></a>
          </li>
          <li title={'x.com/MahajanInsights'}>
            <a href="https://x.com/MahajanInsights"> <FaXTwitter size={17} style={{ verticalAlign: 'sub' }} /></a>
          </li>
          <li title={'facebook.com/divyangi.mahajan'}>
            <a href="https://www.facebook.com/divyangi.mahajan"> <FaFacebookF size={17} style={{ verticalAlign: 'sub' }} /></a>
          </li>
        </ul>

      </div>
    </div>
    <nav>
      <ul>
        <li style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About Me
          </button>
        </li>
        <li style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Experience
          </button>
        </li>
        <li style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
        </li>
        <li style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Reach Out
          </button>
        </li>
        <li>        
          <a href={downloadFile} style={{ display: 'flex', justifyContent: 'center' }} download>
          <button>
              Download PDF
              </button>
           </a>
           
        </li>
      </ul>
    </nav>
  </header>

)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
