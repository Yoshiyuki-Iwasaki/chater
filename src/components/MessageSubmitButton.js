import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    <IconButton
      aria-label="delete"
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
