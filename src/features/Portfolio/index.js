import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as GithubIcon } from "../../icons/github.svg";
import { github } from "../../nameplate";
import {
  StyledPortfolio,
  Header,
  Title,
  Subtitle,
  IconLink,
} from "./styled";
import {
  fetchReposStart,
  selectRepos,
  selectReposStatus,
} from "./reposSlice";
import Content from "./Content";

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
        <IconLink target="_blank" href={github} rel="noreferrer">
          <GithubIcon />
        </IconLink>
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      <Content status={status} repositories={repos} />
    </StyledPortfolio>
  );
};

export default Portfolio;
