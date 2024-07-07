import React from 'react';
import './ProgramOverview.css';

const ProgramOverview = () => {
  return (
   <div className="program-overview-container">
    <div className="program-overview">
      <h2>Program Overview</h2>
      <div className="program-details">
        <div className="detail">
          <i className="icon live-classes"></i>
          <p>Live Online Classes</p>
        </div>
        <div className="detail">
          <i className="icon duration"></i>
          <p>6 Months (course (3) + Internship (3))</p>
        </div>
        <div className="detail">
          <i className="icon certification"></i>
          <p>Certification</p>
        </div>
        <div className="detail">
          <i className="icon work-opportunity"></i>
          <p>Work Opportunity</p>
        </div>
        <div className="detail">
          <i className="icon community"></i>
          <p>Supportive Community</p>
        </div>
      </div>
    </div>
 </div>
  );
};

export default ProgramOverview;