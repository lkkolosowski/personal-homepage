import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledPortfolio, Header, Icon, Title, Subtitle } from "./styled";
import {
  fetchReposStart,
  selectRepos,
  selectReposStatus,
} from "../../reposSlice";
import Repositories from "../Repositories";
import Loader from "../Loader";
import Failure from "../Failure";

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
        <Icon />
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <Repositories repositories={repos} />
      ) : status === "error" ? (
        <Failure />
      ) : (
        console.error(`incorrect status: ${status}`)
      )}
    </StyledPortfolio>
  );
};

export default Portfolio;
