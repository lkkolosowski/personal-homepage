import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFormStatus } from "../../features/Homepage/utilsSlice";
import MyConfetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confettii = () => {
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const formStatus = useSelector(selectFormStatus);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (formStatus === "success") {
      setNumberOfPieces(300);
      setTimeout(() => setNumberOfPieces(0), 3000);
    }
  }, [formStatus]);

  return (
    <MyConfetti
      numberOfPieces={numberOfPieces}
      style={{ position: "fixed" }}
      width={width}
      height={height}
    />
  );
};

export default Confettii;
