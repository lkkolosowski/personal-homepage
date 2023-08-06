import { useState, useEffect } from "react";

export const useOnLoadImages = (ref) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const updateStatus = (images) => {
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    if (!ref?.current) return;

    const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

    if (imagesLoaded.length === 0) {
      setStatus(true);
      return;
    }

    imagesLoaded.forEach((image) => {
      image.addEventListener("load", () => updateStatus(imagesLoaded), {
        once: true,
      });
      image.addEventListener("error", () => updateStatus(imagesLoaded), {
        once: true,
      });
    });

    return imagesLoaded.forEach((image) => {
      image.removeEventListener("load", () => updateStatus(imagesLoaded), {
        once: true,
      });
      image.removeEventListener("error", () => updateStatus(imagesLoaded), {
        once: true,
      });
    });
  }, [ref]);

  return status;
};
