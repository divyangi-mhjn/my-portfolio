import React from 'react';
import '../../assets/css/skillCards.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaBitbucket, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiScala, SiCypress, SiExpress, SiJira, SiTestinglibrary, SiContentful, SiPostman, SiIntellijidea, SiFirebase, SiJest } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { LiaGit } from "react-icons/lia";
import { GrOracle,GrHeroku } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export const Skills = () => {

  const skillsData = [
    {
      title: 'React JS',
      icon: <FaReact />
    },
    {
      title: 'Javascript',
      icon: <FaJs />
    },
    {
      title: 'HTML',
      icon: <FaHtml5 />
    },
    {
      title: 'CSS',
      icon: <FaCss3Alt />
    },
    {
      title: 'Typescript',
      icon: <SiTypescript />
    },
    {
      title: 'Redux',
      icon: <SiRedux />
    },
    {
      title: 'Jest',
      icon: <SiJest />
    },
    {
      title: 'RTL',
      icon: <SiTestinglibrary />
    },
    {
      title: 'Scala',
      icon: <SiScala />
    },
    {
      title: 'Cypress',
      icon: <SiCypress />
    },
    {
      title: 'Git',
      icon: <LiaGit />
    },
    {
      title: 'Node JS',
      icon: <FaNodeJs />
    },
    {
      title: 'Express',
      icon: <SiExpress />
    },
    {
      title: 'Github',
      icon: <FaGithub />
    },
    {
      title: 'Jira',
      icon: <SiJira />
    },
    {
      title: 'BitBucket',
      icon: <FaBitbucket />
    },
    {
      title: 'Contentful',
      icon: <SiContentful />
    },
    {
      title: 'OracleDB',
      icon: <GrOracle />
    },
    {
      title: 'Postgresql',
      icon: <BiLogoPostgresql />
    },
    {
      title: 'Figma',
      icon: <FaFigma />
    },
    {
      title: 'Postman',
      icon: <SiPostman />
    },
    {
      title: 'VS Code IDE',
      icon: <VscVscode />
    },
    {
      title: 'IntelliJ IDE',
      icon: <SiIntellijidea />
    },
    {
      title: 'Redis',
      icon: <DiRedis />
    },
    {
      title: 'Firebase',
      icon: <SiFirebase />
    },
    {
      title: 'Heroku',
      icon: <GrHeroku />
    }

  ]

  return (
    <div className="tab-container">
      <div className='skillContainer'>
        {skillsData.map((key) => {
          return (
            <div className='skillCard'>
              <div className='techContainer'>
                {key.icon}
                <span>{key.title}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>

  );
}