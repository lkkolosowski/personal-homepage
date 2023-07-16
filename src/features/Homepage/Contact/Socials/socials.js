import { styledIcon } from "./styled";
import { github, linkedin, instagram } from "../../nameplate";
import { ReactComponent as GithubIcon } from "../../../../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../../icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../../icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: github,
    Icon: styledIcon(GithubIcon),
    iconBackground: "#6e5494",
  },
  {
    name: "LinkedIn",
    url: linkedin,
    Icon: styledIcon(LinkedinIcon),
    iconBackground: "#0072b1",
  },
  {
    name: "Instagram",
    url: instagram,
    Icon: styledIcon(InstagramIcon),
    iconBackground: "#c13584",
  },
];
