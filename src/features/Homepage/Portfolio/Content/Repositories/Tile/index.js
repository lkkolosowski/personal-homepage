import { motion } from "framer-motion";
import { ButtonLink, TextLink } from "../../../../../../common/Link";
import {
  Title,
  Description,
  IconImage,
  Content,
  ThumbnailImage,
  ThumbnailImageOverlay,
  PlayIcon,
  CodeIcon,
  Buttons,
} from "./styled";
import { capitalizeWords } from "./utils";
import { name as fullname, nick, projects } from "../../../../nameplate";
import websiteIcon from "../../../../../../images/website.png";
import placeholderImage from "../../../../../../images/placeholderImage.svg";
import Card from "../../../../Card";

const Tile = ({ name, description, homepage, html_url, tileIndex }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = websiteIcon;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        height: "100%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        height: "100%",
      }}
      transition={{
        type: "spring",
        duration: 0.9,
        bounce: 0.45,
        delay: tileIndex * 0.1,
      }}
      viewport={{
        once: true,
      }}
    >
      <a target={"_blank"} href={homepage || html_url} rel="noreferrer">
        <Card
          contentFront={
            <ThumbnailImage
              src={
                projects.find((x) => x.name === name)
                  ? projects.find((x) => x.name === name).thumbnail
                  : placeholderImage
              }
              alt={name}
            />
          }
          contentBack={
            <ThumbnailImageOverlay>
              <ThumbnailImage
                src={
                  projects.find((x) => x.name === name)
                    ? projects.find((x) => x.name === name).thumbnail
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
              <IconImage
                src={`https://lkkolosowski.github.io/${name}/icon128.png`}
                alt={name}
                onError={imageOnErrorHandler}
              />
              {name !== nick ? capitalizeWords(name) : fullname}
            </ButtonLink>
          </Title>
          <Description>{description}</Description>
        </div>
        <Buttons>
          {homepage && (
            <ButtonLink text target={"_blank"} href={homepage}>
              <PlayIcon />Demo
            </ButtonLink>
          )}
          <ButtonLink text target={"_blank"} href={html_url}>
            <CodeIcon />Code
          </ButtonLink>
        </Buttons>
      </Content>
    </motion.div>
  );
};

export default Tile;
