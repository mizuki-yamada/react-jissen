import * as React from "react";
import List from "@mui/material/List";
import { makeStyles } from "@mui/material";
import { Chat } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.pallet.background.paper,
  },
}));

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => {
          <Chat text={chat.text} type={chat.type} key={index.toString()}></Chat>;
      })}
    </List>
  );
};

export default Chats;
