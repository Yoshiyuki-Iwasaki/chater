import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => {
        if (isComposed) return; //isComposedがtrueの時にアーリーリターン

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          console.log("push name to firebase");
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
