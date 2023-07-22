import axios from "axios";

const getRepos = () => {
  const username = "lkkolosowski";
  const apiURL = "https://api.github.com";
  const params = {
    sort: "pushed",
  };

  const response = axios
    .get(`${apiURL}/users/${username}/repos`, { params })
    .then((response) => response.data);

  return response;
};

export default getRepos;
