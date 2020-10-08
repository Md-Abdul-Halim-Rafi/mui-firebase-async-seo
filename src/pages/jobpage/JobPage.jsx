import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Typography, Container } from "@material-ui/core";

const JobPage = (props) => {
  const id = props.match.params.id;
  const [job, setJob] = useState(undefined);

  useEffect(() => {
    getJobDescription();
  }, []);

  const getJobDescription = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
      )
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => setJob(null));
  };

  return (
    <Container maxWidth='sm'>
      {typeof job === "undefined" ? (
        <div style={{ textAlign: "center", width: "100%" }}>
          <CircularProgress disableShrink />
        </div>
      ) : (
        <div>
          {job === null ? (
            <Typography>Couldn't fetch</Typography>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          )}
        </div>
      )}
    </Container>
  );
};

export default JobPage;
