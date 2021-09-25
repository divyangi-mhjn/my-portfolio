import PropTypes from 'prop-types'
import React from 'react'
import myimg from "../images/initials1.png"


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span><img className="logo" src={myimg} alt="DM" width="60" height="90" /></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Divyangi Mahajan</h1>
        <p>
          A full stack developer and Devops Engineer 
        </p>
        <ul className="icons">
           
           
            <li>
              <a href="https://www.linkedin.com/in/divyangi-mahajan" className="icon fa-linkedin">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/divyangi-mhjn"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/divyangi.mahajan" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
         
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={(data) => {
              window.open(require('../../public/document/divyangi_mahajan.pdf'), '_none')
            }}
          >
            Download
          </button>
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
