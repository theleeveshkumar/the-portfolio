import React from 'react';
import ResumePDF from '../assets/22BCE10999-Resume.pdf';
import './css/resume.css';

const Resume = () => {
  return (
    <div className="resume-main">
      <iframe
        src={ResumePDF}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
