import { useEffect } from "react";
import { projects } from "./projects";
import Repositories from "./Repositories";
import Loader from "./Loader";
import Failure from "./Failure";

const Content = ({ status, repositories }) => {
  const loadImages = () => {
    projects.forEach(({ thumbnail }) => {
      new Image().src = thumbnail;
    });
  };

  useEffect(() => {
    loadImages();
  }, []); // eslint-disable-line

  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loader />;

    case "error":
      return <Failure />;

    case "success":
      return <Repositories projects={projects} repositories={repositories} />;

    default:
      throw new Error(`Incorrect status: ${status}`);
  }
};

export default Content;
