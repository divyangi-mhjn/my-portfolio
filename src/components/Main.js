import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/my-img.jpg'
import {Email} from './Email.js'
import {Skills} from './Skills.js'


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
        style={this.props.timeout ? { display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between',
        position: 'relative',minHeight: '100vh',width: '100%',padding: '4rem 2rem', 'z-index': '3'}
        : { display: 'none' }}
       
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <div>
          <h2 className="major">Introduction</h2>
          <span className="image main">
            {/* <img src={pic01} alt="" height="250"  width="400" style={{ borderRadius: '50%', display: 'block', marginLeft: 'auto',  marginRight: 'auto',  width: '50%'}}/> */}
            <img src={pic01} alt="" />
          </span>

          <p>
            Hey there!
           </p><p> I’m a Tech-savvy developer with 3+ years of experience
            for collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines.
          </p>
          <p>I am Passionate for web development. My best assets are my creativity, my feeling with technology and my passion.</p>

          <p>I completed my Bachelor's in Computer asciences from Kurukshetra university with an honour's degree
            in 2018.
            I worked for Skill Lotto Solutions from Jun 2018-Feb 2019 as an Application Developer and currently I am working with Tata Consultancy Services and an Application Developer since March 2019.
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
          
          <div className="image-main" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            {/* <div></div> */}
            <div style={{ marginTop: '30px', height: '35px', width: '35px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block' }}>
            </div>
            <div style={{paddingTop :'20px'}}> <h5 className="text-sm font-normal mb-1">Tata Consultancy Services</h5>

              <span className="text-sm font-medium opacity-50" >Application Developer Since March-2019</span>

            </div>
          </div><br />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            
            <div style={{ borderLeft: '3px solid #bbb', height: '40px', marginLeft: '15px' }}></div>
            <div></div>
          </div>
          <br />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            {/* <div></div> */}
            <div style={{ height: '35px', width: '35px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block' }}>
            </div>
            <div> <h5 className="text-sm font-normal mb-1">Skill Lotto Solutions</h5>

              <span className="text-sm font-medium opacity-50">Application Developer From Jun 2018- Feb 2019</span>
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
