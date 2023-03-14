import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/my-img.jpg';
import { Email } from './Email.js';
import { Skills } from './Skills.js';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (

      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex', width: '100vw', height: '100vh' }
          : { display: 'none' }}

      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <div >

            <h2 className="major">Introduction</h2>
            <span className="image-main">
              <img src={pic01} alt="" height="25%" width="40%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
            </span>

            <p>
              Hey There!
            </p><p> I’m a Tech-savvy developer with 5 years of experience
              for collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines.
            </p>
            <p>I am Passionate for web development. My best assets are my creativity, my feeling with technology and my passion.</p>

            <p>I completed my Bachelor's of technology in Computer Sciences from Kurukshetra university with an honour's degree
              in 2018.
            </p>


            {close}
          </div>
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >

          <h2 className="major">Work Experience</h2>

          <div className="image-main" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
            <div style={{ paddingTop: '20px' }}> <h3 className="text-sm font-normal mb-1">LTIMindtree</h3>

              <span className="text-sm font-medium opacity-50" >Senior Software Engineer</span>

            </div>
            <div style={{ paddingTop: '20px' }}>

              <h3 className="text-lg font-large mb-1">Feb 2022 - Present</h3>

            </div>
          </div>

          <div className="image-main" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>


            <div style={{ paddingTop: '20px' }}> <h3 className="text-sm font-normal mb-1">Tata Consultancy Services</h3>

              <span className="text-sm font-medium opacity-50" >System Engineer</span>

            </div>

            <div style={{ paddingTop: '20px' }}>

              <h3 className="text-lg font-large mb-1">Mar 2019 - Feb 2022</h3>

            </div>
          </div>
          <hr />

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>

            <div> <h3 className="text-sm font-normal mb-1">Skill Lotto Solutions</h3>

              <span className="text-sm font-medium opacity-50">Software Developer</span>
            </div>
            <div> <h3 className="text-sm font-normal mb-1">Jun 2018 - Feb 2019</h3>
            </div>
          </div>

          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills Summary</h2>
          <div className="image-main"> <Skills /></div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <div className="image-main"><Email /></div>
          {close}
        </article>


      </div>

    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
