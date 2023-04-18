import { useEffect, useState } from "react";

export const usePhrases = (props) => {
  const [phrase, setPhrase] = useState([]);

  useEffect(() => {
    const phrases = props;
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    const loop = () => {
      isEnd = false;

      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          setPhrase(currentPhrase.join(""));
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j]);
          j--;
          setPhrase(currentPhrase.join(""));
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
      const spedUp = 40;
      const normalSpeed = 80;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
      setTimeout(loop, time);
    };

    loop();
  }, [props]);

  return phrase;
};
