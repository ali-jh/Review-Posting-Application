import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <Box
     bgColor={"#d1e8e4"}
     borderRadius="10px"
     padding={"1rem"}
     minHeight="170px"
     display={"flex"}
     flexDirection="column"
     justifyContent={"space-between"}
     whiteSpace="pre-wrap"
     >
      <span>{text}</span>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <small>{date}</small>
        <Button onClick={() => handleDeleteNote(id)} cursor="pointer">
          delete <MdOutlineDelete />
        </Button>
      </Box>
    </Box>
  );
};

export default Note;
