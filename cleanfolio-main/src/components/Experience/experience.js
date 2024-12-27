// Experience.js
import React from 'react';
import { experience } from '../../portfolio';
import './experience.css'
import '../shared.css'


const Experience = () => (
    <div id="experience" className="section experience">
      <h2 className="section__title">Experience</h2>
      <div className="experience-grid">
        {experience.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h3>{exp.degree}</h3>
            <p>{exp.school}</p>
            <p>{exp.year}</p>
            <div className="experience-details">
              <ul>
                {exp.details.map((detail) => (
                  <li key={detail.id}>{detail.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Experience;
  

