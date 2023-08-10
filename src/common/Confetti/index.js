import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormStatus,
  selectNumberOfConfettiPieces,
  setNumberOfConfettiPieces,
} from "../../features/Homepage/utilsSlice";
import MyConfetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confettii = () => {
  const dispatch = useDispatch();
  const numberOfConfettiPieces = useSelector(selectNumberOfConfettiPieces);
  const formStatus = useSelector(selectFormStatus);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (formStatus === "success") {
      dispatch(setNumberOfConfettiPieces(300));
      setTimeout(() => dispatch(setNumberOfConfettiPieces(0)), 3000);
    }
  }, [dispatch, formStatus]);

  return (
    <MyConfetti
      numberOfPieces={numberOfConfettiPieces}
      style={{ position: "fixed" }}
      width={width}
      height={height}
    />
  );
};

export default Confettii;
