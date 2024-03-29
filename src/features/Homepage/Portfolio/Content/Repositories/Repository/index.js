import { motion } from "framer-motion";
import { ButtonLink } from "../../../../../../common/Link";
import {
  Title,
  Description,
  Content,
  ThumbnailImage,
  ThumbnailImageOverlay,
  PlayIcon,
  CodeIcon,
  Buttons,
  StyledRepository,
  EarthIcon,
} from "./styled";
import { capitalizeWords } from "./utils";
import { name as fullname, nick } from "../../../../nameplate";
import placeholderImage from "../../../../../../images/placeholderImage.svg";
import Card from "../../../../Card";
import useWindowSize from "react-use/lib/useWindowSize";

const Repository = ({ projects, name, description, homepage, html_url }) => {
  const { width } = useWindowSize();

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      duration: 0.9,
      bounce: 0.45,
    },
  };

  return (
    <StyledRepository
      as={motion.div}
      variants={item}
      whileInView={width > 1200 ? undefined : "show"}
      initial={width > 1200 ? undefined : "hidden"}
      viewport={{
        once: true,
      }}
    >
      <a target={"_blank"} href={homepage || html_url} rel="noreferrer">
        <Card
          contentFront={
            <ThumbnailImage
              src={
                projects.find((project) => project.name === name)
                  ? projects.find((project) => project.name === name).thumbnail
                  : placeholderImage
              }
              alt={name}
            />
          }
          contentBack={
            <ThumbnailImageOverlay>
              <ThumbnailImage
                src={
                  projects.find((project) => project.name === name)
                    ? projects.find((project) => project.name === name)
                        .thumbnail
                    : placeholderImage
                }
                alt={name}
                details
              />
            </ThumbnailImageOverlay>
          }
          backgroundFront={(theme) => theme.white}
          backgroundBack={(theme) => theme.white}
        />
      </a>
      <Content>
        <div>
          <Title>
            <ButtonLink text target={"_blank"} href={homepage || html_url}>
              {projects.find((project) => project.name === name) ? (
                projects.map(
                  (project) =>
                    project.name === name && <project.Icon key={project.name} />
                )
              ) : (
                <EarthIcon />
              )}
              {name !== nick ? capitalizeWords(name) : fullname}
            </ButtonLink>
          </Title>
          <Description>{description}</Description>
        </div>
        <Buttons>
          {homepage && (
            <ButtonLink text target={"_blank"} href={homepage}>
              <PlayIcon />
              Demo
            </ButtonLink>
          )}
          <ButtonLink text target={"_blank"} href={html_url}>
            <CodeIcon />
            Code
          </ButtonLink>
        </Buttons>
      </Content>
    </StyledRepository>
  );
};

export default Repository;
