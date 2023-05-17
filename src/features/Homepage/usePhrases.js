import { useEffect, useState } from "react";

export const usePhrases = (phrases) => {
  const [phrase, setPhrase] = useState([]);

  useEffect(() => {
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    const loop = () => {
      const spedUp = 40;
      const normalSpeed = 80;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

      isEnd = false;
      setPhrase(currentPhrase.join(""));

      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j]);
          j--;
        }

        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }
        }
      }

      setTimeout(loop, time);
    };

    loop();
  }, [phrases]);

  return phrase;
};
