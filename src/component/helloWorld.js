import React, { useState, useEffect } from "react";
import dog1 from "../Images/dog1.jpg";
import dog2 from "../Images/dog2.jpg";
import dog3 from "../Images/dog3.jpg";
import dog4 from "../Images/dog4.jpg";
import dog5 from "../Images/dog5.jpg";

const styles = {
  imageStyle: {
    width: "300px",
    height: "auto",
  },
};

function shuffle(array) {
  // Fisher-Yatesアルゴリズムを使ったランダムシャッフル
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function HelloWorld() {
  const [images, setImages] = useState([dog1, dog2, dog3, dog4, dog5]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImages((prevImages) => shuffle([...prevImages]));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <span key={index}>
          <img src={image} alt="imageTest" style={styles.imageStyle} />
        </span>
      ))}
    </div>
  );
}

export default HelloWorld;
