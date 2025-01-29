import React from "react";
import myImg from '../../images/my-img.jpg';

export const Intro = () =>{
    return(
        <div >

        <h2 className="major">Introduction</h2>
        <span className="tab-container">
          <img src={myImg} alt="" height="25%" width="40%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
        </span>

        <p>
          Hey There!
        </p><p> 
        As a seasoned IT developer with 7 years of experience in crafting innovative software solutions, I possess a unique blend of technical expertise and industry insight. With a proven track record of delivering high-quality projects on time , I excel in leveraging cutting-edge technologies to drive business growth and improvement. 
        Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines.
        </p>
        <p>
        My expertise spans in Frontend Development which includes React JS, Javscript, Typescript, ES6 and test driven development. I am familiar with backend technologies such as Node JS, Scala, Java and databases which include Oracle DB , PostgreSQL , firebase.
        I am passionate about staying at the forefront of industry trends and delivering high-quality solutions that meet and exceed client expectations.
        </p>
        <p>My best assets are my creativity, my feeling with technology and my passion.
        Thank you for taking time to read and hope to connect with you soon!</p>
      </div>
    )
}