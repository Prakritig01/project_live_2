import React, { useContext } from "react";
import { JobContext } from "./../Context/JobConetxt";
import "./JobComponent.css";
import companyImg from "./../../assests/Employers Logo (1).png";

const JobComponent = () => {
  const { jobList } = useContext(JobContext); // Get the jobList from context

  return (
    <div className="job-list">
      {jobList.map((job, index) => (
        <div key={index} className="job-card">
          <p className="title">{job.title}</p>
          <div className="salary">
            <p className="remote">{job.remote ? "Remote" : "On-site"}</p>
            <p className="salary-para">{job.salary}</p>
          </div>
          <div className="company">
            <img src={companyImg} alt="" />
            <div className="company-text">
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobComponent;
