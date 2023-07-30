import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { links } from "../nameplate";
import { GithubIcon, IconLink } from "./styled";
import { fetchReposStart, selectRepos, selectReposStatus } from "./reposSlice";
import Content from "./Content";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const Portfolio = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const status = useSelector(selectReposStatus);

  useEffect(() => {
    dispatch(fetchReposStart());
  }, [dispatch]);

  return (
    <Section>
      <Header
        icon={
          <IconLink
            aria-label="link to my recent projects"
            target="_blank"
            href={links.github}
            rel="noreferrer"
          >
            <GithubIcon />
          </IconLink>
        }
        title={"Portfolio"}
        subtitle={"My recent projects"}
      />
      <Content status={status} repositories={repos} />
    </Section>
  );
};

export default Portfolio;
