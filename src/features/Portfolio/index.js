import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as GithubIcon } from "../../icons/github2.svg";
import { github } from "../../nameplate";
import { StyledPortfolio, Header, Title, Subtitle, IconLink } from "./styled";
import {
  fetchReposStart,
  selectRepos,
  selectReposStatus,
} from "./Repositories/reposSlice";
import Repositories from "./Repositories";
import Loader from "./Loader";
import Failure from "./Failure";

const Portfolio = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const status = useSelector(selectReposStatus);

  useEffect(() => {
    dispatch(fetchReposStart());
  }, [dispatch]);

  return (
    <StyledPortfolio>
      <Header>
        <IconLink target="_blank" href={github}>
          <GithubIcon />
        </IconLink>
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      {(() => {
        if (status === "loading") {
          return <Loader />;
        }

        if (status === "error") {
          return <Failure />;
        }

        return <Repositories repositories={repos} />;
      })()}
    </StyledPortfolio>
  );
};

export default Portfolio;
