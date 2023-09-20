import React from "react";
import AssessmentDataSection from "./AssessmentDataSection";
import AssessmentSection from "./AssessmentSection";

const RightSection = () => {
  return (
    <div className="right-section-container">
      <header className="header-section">
        <h1 className="header-text">Assessment</h1>
        <div className="separator"></div>
        <p className="header-text">My Assessments</p>
      </header>

      <hr className="divider" />

      {/* right-section-body */}
      <main className="right-section-body">
        <span className="body-first-header">Assessments Overview</span>
        <AssessmentDataSection />
        <span className="body-second-header">My Assessments</span>
        <AssessmentSection />
      </main>
    </div>
  );
};

export default RightSection;
