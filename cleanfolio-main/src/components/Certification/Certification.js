
  // Certification.js
import React from 'react';
import './Certification.css';
import { certification } from '../../portfolio';
import '../shared.css';

const Certification = () => (
  <div id="certification" className="certification-section">
    <h2 className='section__title'>Certifications & Achievements</h2>
    <div className="certification-grid">
      {certification.map((cert) => (
        <div key={cert.id} className="certification-card">
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            <img src={cert.image} alt={cert.title} className="certification-image" style={{ maxWidth: '200px', height: 'auto' }}/>
          </a>
          <div className="certification-info">
            <h3>{cert.title}</h3>
            <p className="issued" >Issued by {cert.issuedBy}</p>
            <p className="issued">{cert.year}</p>
            <p>{cert.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certification;
