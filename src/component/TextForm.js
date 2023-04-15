import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>有名人の名前を入力してください</div>
      <input type="text" onChange={handleChange} value={text} />
      <p>検索する有名人: {text}</p>
    </div>
  );
}

export default TextForm;
