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
import { styledIcon } from "./Skillset/styled";

export const skills = [
  {
    name: "HTML 5",
    Icon: styledIcon(HtmlIcon),
    color: "#008db9",
  },
  {
    name: "CSS 3",
    Icon: styledIcon(CssIcon),
    color: "#1572b6",
  },
  {
    name: "React Router",
    Icon: styledIcon(ReactRouterIcon),
    color: "#ca4245",
  },
  {
    name: "Redux",
    Icon: styledIcon(ReduxIcon),
    color: "#593d88",
  },
  {
    name: "React",
    Icon: styledIcon(ReactIcon),
    color: "#20232a",
  },
  {
    name: "JS E6+",
    Icon: styledIcon(JavascriptIcon),
    color: "#323330",
  },
  {
    name: "styled-components",
    Icon: styledIcon(StyledComponentsIcon),
    color: "#db7093",
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
