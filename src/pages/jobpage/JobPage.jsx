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

    // eslint-disable-next-line
  }, []);

  const getJobDescription = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      )
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => setJob(null));
  };

  console.log(job);

  return (
    <div>
      <Container maxWidth="sm">
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
                <SEO
                  title={job.title}
                  // desctiption={job.description.slice(0, 100)}
                  desctiption={job.title}
                  pathname={props.location.pathname}
                  image={job.thumbnailUrl}
                />
                <div
                  style={{
                    marginTop: "20px",
                    maxWidth: "600px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src={job.thumbnailUrl || "https://cdn.mainlycoding.com/admin/rafee.png"}
                    alt={job.title}
                  />
                </div>
                <div dangerouslySetInnerHTML={{ __html: job.title }} />
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default JobPage;
