import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NoProfile from "../assets/img/no-profile.png";
import Torahack from "../assets/img/torahack.png";

const Chat = (props) => {
  const isQuestion = props.type === "question"; //propsのtypeがquestionかどうかをT/Fで返す
  const classes = isQuestion ? "p-chat_row" : "p-chat_reverse"; //これ便利、Reactっぽいし使いたい

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Torahack} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat_bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
