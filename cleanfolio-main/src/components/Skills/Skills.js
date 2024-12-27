import React from 'react';
import { skills } from '../../portfolio';  // Update the import path as necessary
import './Skills.css';

const Skills = () => {
  if (skills.length === 0) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {skills.map((category) => (
        <div key={category.category}>
          <h3 className="skills__category-title">{category.category}</h3>
          <ul className='skills__list'>
            {category.skills.map(skill => (
              <li key={skill.name} className='skills__list-item btn btn--plain'>
                {skill.logo ? (
                  <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  onError={(e) => {
                    e.target.onError = null;  // Properly handle the onError property.
                    e.target.src = '';  // Set a fallback or empty src.
                  }}
                />
                
                ) : skill.name}  {/* Fallback to skill name if no logo */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
