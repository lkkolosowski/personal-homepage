import { nick } from "../../../nameplate";

export const transformedRepositories = (repositories) => {
  if (repositories.length % 2 === 1) {
    return repositories.filter(({ name }) => name !== nick);
  }
  return repositories;
};
