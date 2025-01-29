import React from 'react';
import '../../assets/css/skillCards.css';
import { faReact , faJs, faHtml5, faCss} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skills = () => {

  const skillsData = [
    {
      title: 'React JS',
      icon: faReact
    },
    {
      title: 'Javascript',
      icon: faJs
    },
    {
      title: 'HTML',
      icon: faHtml5
    },
    {
      title: 'CSS',
      icon: faCss
    },
    {
      title: 'Typescript',
      icon: faCss
    },
    {
      title: 'Redux',
      icon: faCss
    },
    {
      title: 'Redis',
      level: 60,
      color: '#66ccff',
    },
    {
      title: 'Scala',
      level: 60,
      color: '#66ccff',
    },
    {
      title: 'Cypress',
      level: 60,
      color: '#66ccff',
    },
    {
      title: 'Git',
      level: 85,
      color: '#00e6b8',
    },
    {
      title: 'Node JS',
      level: 85,
      color: '#00e6b8',
    },
    {
      title: 'Express',
      level: 85,
      color: '#00e6b8',
    },
    {
      title: 'Github',
      level: 85,
      color: '#66ccff',
    },
    {
      title: 'Jira',
      level: 90,
      color: '#00e6b8',
    },
    {
      title: 'BitBucket',
      level: 60,
      color: '#66ccff',
    },
    {
      title: 'Contentful',
      level: 90,
      color: '#00e6b8',
    },
    {
      title: 'OracleDB',
      level: 70,
      color: '#66ccff',
    },
    {
      title: 'Postgresql',
      level: 90,
      color: '#00e6b8',
    },
    {
      title: 'Figma',
      level: 90,
      color: '#00e6b8',
    },
    {
      title: 'Postman',
      level: 60,
      color: '#66ccff',
    },
    {
      title: 'VS Code',
      level: 60,
      color: '#66ccff',
    }

  ]

  return (
    <div className="tab-container">
      <div className='skillContainer'>
        {skillsData.map(({ title, icon }) => {
          return (
            <div className='skillCard'>
              <div className='techContainer'>
                <FontAwesomeIcon icon={icon} />
                <i className="devicon-devicon-plain-wordmark"></i>

                <span>{title}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>

  );
}