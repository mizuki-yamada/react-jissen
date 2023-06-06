import React from "react";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

const Answer = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.answer.content}
    </Button>

    // <Button
    //     className={classes.button}
    //     variant="outlined"
    //     onClick={() => props.select(props.answer.content, props.answer.nextId)}
    // >
    //     {props.answer.content}
    // </Button>
  );
};

export default Answer;
