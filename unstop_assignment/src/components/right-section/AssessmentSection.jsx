import React from "react";
import "./assessment-section.css";

const AssessmentSection = () => {
  return (
    <section className="assessment-section-container">
      <div className="new-assessment">
        <div className="new-assessment-icon">
          <img
            src="src\assets\assessment-section\new-assessment-icon.svg"
            alt="new-assessment-icon"
          />
        </div>
        <p className="new-assessment-title">New Assessment</p>
        <p className="new-assessment-text">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>

      <section className="existing-assessment-container">
        <div className="existing-assessment-icon">
          <img src="" alt="" />
        </div>
        <section className="assessment-data">
          <h2 className="existing-assessment-title"></h2>
          <div className="category-data">
            <div className="category"></div>
            <div className="date"></div>
          </div>
        </section>

        <hr />
        <div className="existing-assessment-footer">
          <div className="time-duration"></div>
          <div className="sharelink-icon-section">
            <section className="share-link-container">
              <img src="" alt="" />
              <p>Share</p>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AssessmentSection;
