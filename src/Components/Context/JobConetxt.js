import React, { createContext, useState } from 'react';
import { jobs } from '../../Data/Data';

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobList,setJobList] = useState(jobs); 

  return (
    <JobContext.Provider value={{ jobList }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
