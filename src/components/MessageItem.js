import React, { useRef, useEffect } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  list: {
    justifyContent: "flex-end",
  },
  item: {
    flex: "none",
  },
}));

const MessageItem = ({ label, name, text, isLastItem }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      // scroll effect
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isLastItem]);

  console.log(name);
  console.log(label.label);

  return (
    <>
      {label.label === name ? (
        <ListItem className={classes.list} divider={true} ref={ref}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatarPath} />
          </ListItemAvatar>
          <ListItemText
            primary={text}
            className={classes.item}
            secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {name}
              </Typography>
            }
          />
        </ListItem>
      ) : (
        <ListItem divider={true} alignItems="flex-start" ref={ref}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatarPath} />
          </ListItemAvatar>
          <ListItemText
            primary={text}
            secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {name}
              </Typography>
            }
          />
        </ListItem>
      )}
    </>
  );
};

export default MessageItem;
