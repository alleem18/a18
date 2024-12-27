// Education.js
import React from 'react';
import { education } from '../../portfolio';
import './Education.css'
import '../shared.css'


const Education = () => {
    if (education.length === 0) return null;
    
  
    return (
      <div id="education" className="section education">
        <h2 className='section__title'>Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.year}</p>
              <div className="education-gpa">
                <p> GPA: {edu.GPA}</p>
                </div>
              <div className="education-details">
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
export default Education;

