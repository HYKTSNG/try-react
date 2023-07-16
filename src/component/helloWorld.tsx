import React, { useState, useEffect } from "react";
import dog1 from "../Images/dog1.jpg";
import dog2 from "../Images/dog2.jpg";
import dog3 from "../Images/dog3.jpg";
import dog4 from "../Images/dog4.jpg";
import dog5 from "../Images/dog5.jpg";

const styles = {
  imageStyle: {
    width: "250px",
    height: "auto",
    border: "none",
  },
  goldFrame: {
    border: "solid 10px gold",
  },
};

function HelloWorld() {
  const [images, setImages] = useState([dog1, dog2, dog3, dog4, dog5]);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleArray();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const shuffleArray = () => {
    const shuffledArray = [...images];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setImages(shuffledArray);
  };

  return (
    <div>
      {images.map((image, index) => (
        <span key={index} style={index === 2 ? styles.goldFrame : {}}>
          <img
            src={image}
            alt={`imageTest${index}`}
            style={styles.imageStyle}
          />
        </span>
      ))}
    </div>
  );
}

export default HelloWorld;
