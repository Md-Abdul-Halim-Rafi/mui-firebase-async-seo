const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");
const fs = require("fs");
const axios = require("axios");

app.get("/", (request, response) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  // read in the index.html file
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // replace the special strings with server generated strings
    data = data.replace(/\React SSR SEO/g, "React ssr seo");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Mui setup with reactjs and firebase hosting with serverside rendering seo"
    );
    data = data.replace(/\$OG_KEYWORDS/g, "SSR seo Reactjs");
    let result = data.replace(/\$OG_IMAGE/g, "https://cdn.mainlycoding.com/admin/rafee.png");
    response.send(result);
  });
});

app.get("/job/:id", (request, response) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  // read in the index.html file
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // let apiUrl =
    //   `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions` +
    //   `/${request.params.id}.json`;
    let apiUrl =
    `https://jsonplaceholder.typicode.com/songs` +
    `/${request.params.id}`;

    axios.get(apiUrl).then((resdata) => {
      const { title, description, company_logo } = resdata.data;
      console.log(title)
      // replace the special strings with server generated strings
      data = data.replace(/\React SSR SEO/g, title);
      data = data.replace(/\$OG_DESCRIPTION/g, title);
      data = data.replace(/\$OG_KEYWORDS/g, null);
      let result = data.replace(/\$OG_IMAGE/g, thumbnailUrl || "https://cdn.mainlycoding.com/admin/rafee.png");
      // let result = data.replace(/\$OG_IMAGE/g, company_logo || "https://cdn.mainlycoding.com/admin/rafee.png");
      response.send(result);
    });
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
