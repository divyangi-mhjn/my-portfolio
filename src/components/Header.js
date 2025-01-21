import PropTypes from 'prop-types'
import React from 'react'
import myimg from "../images/initials1.png"
import downloadFile from '../assets/document/divyangi-mahajan.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Divyangi Mahajan</h1>
        <p>
          A full stack developer and Devops Engineer
        </p>
        <ul className="icons">
          <li>
            <a href="https://www.linkedin.com/in/divyangi-mahajan"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>
          <li>
            <a
              href="https://www.github.com/divyangi-mhjn" ><FontAwesomeIcon icon={faGithub} /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/divyangi.mahajan"> <FontAwesomeIcon icon={faFacebookF} /></a>
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

          <a href={downloadFile} download> <button>Download
          </button></a>

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
