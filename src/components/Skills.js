import React from 'react';
import { SkillBars } from 'react-skills';
export const Skills = () => {

    const skillsData = [
        {
            name: 'ReactJS',
            level: 85,
            color: '#66ccff',
        },
        {
            name: 'NodeJS',
            level: 70,
            color: '#00e6b8',
        },
        {
            name: 'Javascript',
            level: 85,
            color: '#66ccff',
        },
        {
            name: 'PostreSql',
            level: 85,
            color: '#00e6b8',
        },
        {
            name: 'Oracle DB',
            level: 60,
            color: '#66ccff',
        },
        {
            name: 'Redux',
            level: 85,
            color: '#00e6b8',
        },
        {
            name: 'Java',
            level: 85,
            color: '#66ccff',
        },
        {
            name: 'Contentful',
            level: 90,
            color: '#00e6b8',
        },
        {
            name: 'AWS service',
            level: 60,
            color: '#66ccff',
        },
        {
            name: 'Agile',
            level: 90,
            color: '#00e6b8',
        },
        {
            name: 'Devops',
            level: 70,
            color: '#66ccff',
        },
        {
            name: 'Heroku',
            level: 90,
            color: '#00e6b8',
        },
        {
            name: 'Gatsby.JS',
            level: 60,
            color: '#66ccff',
        }

    ]

    return (
        <SkillBars skills={skillsData} />
    
    );
}