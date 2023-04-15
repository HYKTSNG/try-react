import React from "react";
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

function HelloWorld() {
  return (
    <div>
      <span>
        <img src={dog1} alt="imageTest" style={styles.imageStyle} />
      </span>
      <span>
        <img src={dog2} alt="imageTest" style={styles.imageStyle} />
      </span>
      <span>
        <img src={dog3} alt="imageTest" style={styles.imageStyle} />
      </span>
      <span>
        <img src={dog4} alt="imageTest" style={styles.imageStyle} />
      </span>
      <span>
        <img src={dog5} alt="imageTest" style={styles.imageStyle} />
      </span>
    </div>
  );
}

export default HelloWorld;
