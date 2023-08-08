import arraysAndObjectsThumbnail from "../../../../images/arrays-and-objects.webp";
import currencyConverterReactThumbnail from "../../../../images/currency-converter-react.webp";
import foodMarketThumbnail from "../../../../images/food-market.webp";
import homepageThumbnail from "../../../../images/homepage.webp";
import moviesBrowserThumbnail from "../../../../images/movies-browser.webp";
import personalHomepageThumbnail from "../../../../images/personal-homepage.webp";
import portfolioNextjsThumbnail from "../../../../images/portfolio-nextjs.webp";
import toDoListReactThumbnail from "../../../../images/to-do-list-react.webp";
import { ReactComponent as arraysAndObjectsIcon } from "../../../../icons/projects/arrays-and-objects.svg";
import { ReactComponent as currencyConverterReactIcon } from "../../../../icons/projects/currency-converter-react.svg";
import { ReactComponent as foodMarketIcon } from "../../../../icons/projects/food-market.svg";
import { ReactComponent as homepageIcon } from "../../../../icons/projects/homepage.svg";
import { ReactComponent as moviesBrowserIcon } from "../../../../icons/projects/movies-browser.svg";
import { ReactComponent as personalHomepageIcon } from "../../../../icons/projects/personal-homepage.svg";
import { ReactComponent as portfolioNextjsIcon } from "../../../../icons/projects/portfolio-nextjs.svg";
import { ReactComponent as toDoListReactIcon } from "../../../../icons/projects/to-do-list-react.svg";
import { styledIcon } from "./styled";

export const projects = [
  {
    name: "arrays-and-objects",
    thumbnail: arraysAndObjectsThumbnail,
    Icon: styledIcon(arraysAndObjectsIcon),
  },
  {
    name: "currency-converter-react",
    thumbnail: currencyConverterReactThumbnail,
    Icon: styledIcon(currencyConverterReactIcon),
  },
  {
    name: "food-market",
    thumbnail: foodMarketThumbnail,
    Icon: styledIcon(foodMarketIcon),
  },
  {
    name: "homepage",
    thumbnail: homepageThumbnail,
    Icon: styledIcon(homepageIcon),
  },
  {
    name: "movies-browser",
    thumbnail: moviesBrowserThumbnail,
    Icon: styledIcon(moviesBrowserIcon),
  },
  {
    name: "personal-homepage",
    thumbnail: personalHomepageThumbnail,
    Icon: styledIcon(personalHomepageIcon),
  },
  {
    name: "portfolio-nextjs",
    thumbnail: portfolioNextjsThumbnail,
    Icon: styledIcon(portfolioNextjsIcon),
  },
  {
    name: "to-do-list-react",
    thumbnail: toDoListReactThumbnail,
    Icon: styledIcon(toDoListReactIcon),
  },
];
