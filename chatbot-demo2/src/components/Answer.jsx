import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, createStyles } from "@mui/material";
// import Stack from "@mui/material/Stack";

const useStyles = makeStyles(() => {
  createStyles({
    "button": {
      borderColor: '#ffb549',
      color: '#ffb549',
      fontWeight: 600,
      marginBottom: '8px',
      "&:hover": {
        backgroundColor: '#FFb549',
        color:"#fff"
      }
    }
  })
});

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"//枠組みだけ色をつける
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.answer.content}
    </Button>
  );
};

export default Answer;
