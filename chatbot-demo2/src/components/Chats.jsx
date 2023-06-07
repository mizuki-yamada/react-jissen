import * as React from "react";
import List from "@mui/material/List";
import { makeStyles,createStyles } from "@mui/material";
import { Chat } from "./index";

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      height:400,
      padding:'0',
      overflow:'auto',
    }
  })
));

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
          <Chat text={chat.text} type={chat.type} key={index.toString()}></Chat>;
      })}
    </List>
  );
};

export default Chats;
