const username = 'lkkolosowski';
const apiURL = "https://api.github.com";

const getRepos = async () => {
  const response = await fetch(`${apiURL}/users/${username}/repos`);
  return await response.json();
};

export default getRepos;
