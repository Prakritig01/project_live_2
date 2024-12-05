import React, { useContext } from "react";
import { JobContext } from "./../Context/JobConetxt";
import "./JobComponent.css";
import companyImg from "./../../assests/Employers Logo (1).png";
import bookmark from "../../assests/BookmarkSimple.svg";
import map_pin_2 from '../../assests/map_pin_2.svg';

const JobComponent = () => {
  const { jobList } = useContext(JobContext); // Get the jobList from context

  return (
    <div className="job-list">
      {jobList.map((job, index) => (
        <div key={index} className="job-card">
          <p className="title">{job.title}</p>
          <div className="salary">
            <p className="remote">{job.remote ? "Remote" : "On-site"}</p>
            <p className="salary-para">Salary: {job.salary}</p>
          </div>
          <div className="company">
            <div className="left">
              <img src={companyImg} alt="" className="company-logo" />
              <div className="company-text">
                <p>{job.company}</p>
                <div className="location">
                  <img src= {map_pin_2} alt="" />
                  <p>{job.location}</p>
                </div>
              </div>
            </div>

            <div className="right">
              <img src={bookmark} alt="" className="bookmark" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobComponent;
