import React from "react";
import { Typography, Link } from "@material-ui/core";

const JobLists = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.id}>
            <Link href={`/job/${job.id}`}>
              <Typography>{job.title}</Typography>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default JobLists;
