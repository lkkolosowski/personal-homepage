import Repositories from "./Repositories";
import Loader from "./Loader";
import Failure from "./Failure";

const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loader />;

    case "error":
      return <Failure />;

    case "success":
      return <Repositories repositories={repositories} />;

    default:
      throw new Error(`Incorrect status: ${status}`);
  }
};

export default Content;
