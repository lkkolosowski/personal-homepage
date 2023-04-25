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
    level: "✓ Intermediate",
    description:
      "I write clean and semantically structured code in accordance with accessibility guidelines, ensuring that every user can access and interact with the content.",
  },
  {
    name: "CSS 3",
    Icon: styledIcon(CssIcon),
    color: "#1572b6",
    level: "✓ Intermediate",
    description:
      "I utilize the power of popular CSS frameworks like flexbox and grid to create stunning, responsive layouts that adapt to any screen size and improve the user experience.",
  },
  {
    name: "React Router",
    Icon: styledIcon(ReactRouterIcon),
    color: "#ca4245",
    level: "✓ Basics",
    description:
      "I implement React Router to create seamless and dynamic navigation between different pages of your website, allowing users to easily navigate and interact.",
  },
  {
    name: "Redux",
    Icon: styledIcon(ReduxIcon),
    color: "#593d88",
    level: "✓ Basics",
    description:
      "I integrate Redux into my React applications to manage complex state logic and ensure that the data flows smoothly between components, resulting in a more scalable and maintainable codebase.",
  },
  {
    name: "React",
    Icon: styledIcon(ReactIcon),
    color: "#20232a",
    level: "✓ Basics",
    description:
      "I build dynamic and interactive user interfaces using React, using its powerful component-based architecture to create high-performance and responsive web applications.",
  },
  {
    name: "JS ES6+",
    Icon: styledIcon(JavascriptIcon),
    color: "#323330",
    level: "✓ Intermediate",
    description:
      "I'm writing code in JS ES6+  including features like arrow functions, template literals, and destructuring, that is both easy to read and maintain.",
  },
  {
    name: "styled-components",
    Icon: styledIcon(StyledComponentsIcon),
    color: "#db7093",
    level: "✓ Intermediate",
    description:
      "I use styled-components to create highly customizable and reusable UI components, allowing me to easily maintain a consistent design system and streamline the development process.",
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
