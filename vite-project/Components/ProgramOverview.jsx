import React from 'react';
import './ProgramOverview.css';

const ProgramOverview = () => {
  return (
    <div className="program-overview">
      <h2>Program Overview</h2>
      <div className="overview-items">
        <div className="overview-item">
          <img src="path_to_icon1" alt="Icon 1"/>
          <p>1-on-1 Mock Interviews with Industry Experts</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon2" alt="Icon 2"/>
          <p>Learn AI tools to Code faster, better, and more precisely.</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon3" alt="Icon 3"/>
          <p>Live online classes and Lifetime Access to Recorded Sessions</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon4" alt="Icon 4"/>
          <p>Advance in Coding with 100+ Hours of Industry-Relevant Practical Projects</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon5" alt="Icon 5"/>
          <p>Unlock Your Career Potential with Our Placement Guidance</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon6" alt="Icon 6"/>
          <p>EMI options available(Upto 12 months) with 7-day Refund Policy</p>
        </div>
        <div className="overview-item">
          <img src="path_to_icon7" alt="Icon 7"/>
          <p>Unlimited access to Programming Practice Platforms with 1500+ Problem Statements</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
