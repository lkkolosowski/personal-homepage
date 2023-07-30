import { styledIcon } from "./styled";
import { links } from "../../nameplate";
import { ReactComponent as GithubIcon } from "../../../../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../../icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../../icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: links.github,
    Icon: styledIcon(GithubIcon),
    iconbackground: "#6e5494",
  },
  {
    name: "LinkedIn",
    url: links.linkedin,
    Icon: styledIcon(LinkedinIcon),
    iconbackground: "#0072b1",
  },
  {
    name: "Instagram",
    url: links.instagram,
    Icon: styledIcon(InstagramIcon),
    iconbackground: "#c13584",
  },
];
