import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { messageRef } from "../firebase";
import { List } from "@material-ui/core";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: "auto",
  },
});

const MessageList = label => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messageRef
      .orderByKey()
      // .limitToLast(5)
      .on("value", snapshot => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map(entry => {
          const [key, nameText] = entry;
          return { key, ...nameText };
        });
        setMessages(newMessages);
      });
  }, []);

  const message_length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = message_length === index + 1;

        return (
          <MessageItem
            key={key}
            name={name}
            label={label}
            text={text}
            isLastItem={isLastItem}
          >
            message
          </MessageItem>
        );
      })}
    </List>
  );
};

export default MessageList;
