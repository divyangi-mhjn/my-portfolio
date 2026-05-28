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
        I’m a Frontend Engineer with 8+ years of experience building fast, scalable, and user-focused web applications using React and TypeScript. Over the years, I’ve worked across startups and enterprise teams, creating everything from interactive dashboards to large-scale SaaS platforms.
        </p>
        <p>
       What I enjoy most about frontend development is turning complex problems into clean, intuitive experiences. I care deeply about performance, accessibility, and writing maintainable code that not only works well today but continues to scale over time.
        </p>
        <p>My best assets are my creativity, my feeling with technology and my passion.I’m someone who genuinely loves learning and exploring new technologies. Recently, I’ve been exploring how AI can enhance frontend experiences and developer workflows. I enjoy blending modern UI development with emerging AI capabilities to create smarter user experiences.
          </p>
          <p>
            Beyond coding, I value collaboration, thoughtful problem-solving, and helping teams grow together. Whether it’s mentoring developers, improving workflows, or refining product experiences, I like contributing in ways that make both the product and the people around me better.
        Thank you for taking time to read and hope to connect with you soon!</p>
      </div>
    )
}