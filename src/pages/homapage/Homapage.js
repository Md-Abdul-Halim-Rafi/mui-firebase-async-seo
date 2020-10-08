import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// components
import JobLists from "./component/JobLists";

const useStyles = makeStyles((theme) => ({
  searchDiv: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  textField: {
    width: "70%",
  },
}));

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Homepage() {
  const classes = useStyles();
  const [search, setSearch] = useState("node");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(undefined);
  const [jobs, setJobs] = useState(undefined);

  useEffect(() => {
    searchJobs();
  }, []);

  const searchJobs = () => {
    setLoading(true);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${search}`
      )
      .then((res) => {
        // console.log(res.data);
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setErrMsg("Please try again");
      });
  };

  return (
    <Container maxWidth='md'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Search for job
        </Typography>
        <div className={classes.searchDiv}>
          <TextField
            className={classes.textField}
            placeholder='Search job type, e.g. node'
            variant='outlined'
            size='small'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button onClick={searchJobs} variant='contained' color='primary'>
            Search
          </Button>
        </div>

        <div style={{ margin: "30px 0" }}>
          {loading ? (
            <div style={{ textAlign: "center", width: "100%" }}>
              <CircularProgress disableShrink />
            </div>
          ) : (
            <div>
              {errMsg ? (
                <Typography>{errMsg}</Typography>
              ) : (
                <div>{jobs && <JobLists jobs={jobs} />}</div>
              )}
            </div>
          )}
        </div>

        <Copyright />
      </Box>
    </Container>
  );
}

export default Homepage;
