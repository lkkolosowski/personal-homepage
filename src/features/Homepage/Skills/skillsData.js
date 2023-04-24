import { ReactComponent as ReactIcon } from "../../../icons/react.svg";
import { ReactComponent as CssIcon } from "../../../icons/css.svg";
import { ReactComponent as HtmlIcon } from "../../../icons/html.svg";
import { ReactComponent as JavascriptIcon } from "../../../icons/javascript.svg";
import { ReactComponent as StyledComponentsIcon } from "../../../icons/styled-components.svg";
import { ReactComponent as ReactRouterIcon } from "../../../icons/react-router.svg";
import { ReactComponent as ReduxIcon } from "../../../icons/redux.svg";
import { ReactComponent as TypescriptIcon } from "../../../icons/typescript.svg";
import { ReactComponent as TanstackQueryIcon } from "../../../icons/react-query.svg";
import { ReactComponent as NextjsIcon } from "../../../icons/nextjs.svg";
import { ReactComponent as StarRating3Icon } from "../../../icons/star-rating-3.svg";
import { ReactComponent as StarRating4Icon } from "../../../icons/star-rating-4.svg";
import { ReactComponent as StarRating5Icon } from "../../../icons/star-rating-5.svg";
import { styledIcon, styledRating } from "./Skillset/styled";

export const skills = [
  {
    name: "HTML 5",
    Icon: styledIcon(HtmlIcon),
    color: "#008db9",
    Rating: styledRating(StarRating5Icon),
  },
  {
    name: "CSS 3",
    Icon: styledIcon(CssIcon),
    color: "#1572b6",
    Rating: styledRating(StarRating5Icon),
  },
  {
    name: "React Router",
    Icon: styledIcon(ReactRouterIcon),
    color: "#ca4245",
    Rating: styledRating(StarRating3Icon),
  },
  {
    name: "Redux",
    Icon: styledIcon(ReduxIcon),
    color: "#593d88",
    Rating: styledRating(StarRating4Icon),
  },
  {
    name: "React",
    Icon: styledIcon(ReactIcon),
    color: "#20232a",
    Rating: styledRating(StarRating4Icon),
  },
  {
    name: "JS ES6+",
    Icon: styledIcon(JavascriptIcon),
    color: "#323330",
    Rating: styledRating(StarRating5Icon),
  },
  {
    name: "styled-components",
    Icon: styledIcon(StyledComponentsIcon),
    color: "#db7093",
    Rating: styledRating(StarRating5Icon),
  },
];

export const goals = [
  {
    name: "Typescript",
    Icon: styledIcon(TypescriptIcon),
    color: "#323330",
  },
  {
    name: "React Native",
    Icon: styledIcon(ReactIcon),
    color: "#20232a",
  },
  {
    name: "Tanstack Query",
    Icon: styledIcon(TanstackQueryIcon),
    color: "#ca4245",
  },
  {
    name: "Next.js",
    Icon: styledIcon(NextjsIcon),
    color: "#20232a",
  },
];
