import axios from "axios";

const username = "lkkolosowski";
const apiURL = "https://api.github.com";

const getRepos = () =>
  axios
    .get(`${apiURL}/users/${username}/repos`)
    .then((response) => response.data);

export default getRepos;
