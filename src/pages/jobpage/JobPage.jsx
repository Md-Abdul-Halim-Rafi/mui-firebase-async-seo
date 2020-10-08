import React, { useEffect, useState } from "react";
import SEO from "../../seo";
import axios from "axios";
import { CircularProgress, Typography, Container } from "@material-ui/core";

const JobPage = (props) => {
  const id = props.match.params.id;
  const [job, setJob] = useState(undefined);

  useEffect(() => {
    getJobDescription();

    return () => {
      setJob(undefined);
    };
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

  console.log(job);

  return (
    <div>
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
              <div>
                <SEO title={job.title} pathname={props.location.pathname} />
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default JobPage;
