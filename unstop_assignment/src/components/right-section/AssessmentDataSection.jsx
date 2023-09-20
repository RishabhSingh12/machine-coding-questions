import React from "react";
import { assessmentData } from "../../constants";
import "./assessmentdatasection.css";

const AssessmentDataSection = () => {
  return (
    <section className="assessment-data-section">
      {assessmentData.map((ele, idx) => {
        return (
          <section key={idx} className="data-cubicle">
            <div className="data-heading">{ele.title}</div>

            <div className="data-body">
              <div className="data-icon">
                <img src={ele.icon} />
              </div>
              {Array.isArray(ele.data) ? (
                ele.data.map((data, idx) => {
                  return (
                    <div className="subdata-section">
                      <div key={idx} className="subdata-container">
                        <div className="subdata-figure">{data.number}</div>
                        <div className="subdata-title">{data.title}</div>
                      </div>
                      {idx !== ele.data.length - 1 && (
                        <div className="separator"></div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="data-figure">{ele.data}</div>
              )}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default AssessmentDataSection;
