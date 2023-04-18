import { styleIcon } from "./styled";
import { github, linkedin, instagram } from "../../nameplate";
import { ReactComponent as GithubIcon } from "../../../../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../../icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../../icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: github,
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: linkedin,
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Instagram",
    url: instagram,
    Icon: styleIcon(InstagramIcon),
  },
];
