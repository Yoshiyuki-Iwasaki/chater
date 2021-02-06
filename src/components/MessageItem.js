import React from "react";
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
  root: {
    width: "100%",
    maxWidth: "36ch",
  },
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <ListItem divider={true} alignItems="flex-start">
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
  );
};

export default MessageItem;
