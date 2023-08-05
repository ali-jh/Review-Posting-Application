import { Box, Button, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const AddNote = ({ handleAddNote }) => {
  const charleft = 200;
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (charleft - event.target.value.length > 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <Box bgColor={"#cdf2ca"}>
      <Textarea
        _active={{ outline: "none" }}
        bgColor={"#cdf2ca"}
        border={"none"}
        resize="none"
        rows={"8"}
        cols={"10"}
        placeholder="type review here...."
        value={noteText}
        onChange={handleChange}
      ></Textarea>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <small>{charleft - noteText.length} left</small>
        <Button
          bgColor={"#e1e1e1"}
          border="none"
          borderRadius={"15px"}
          padding={"5px 10px 5px 10px"}
          _hover={{ bgColor: "#ededed", cursor: "pointer" }}
          onClick={handleSaveClick}
        >
          publish <AiOutlineArrowUp style={{ marginLeft: "8px" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default AddNote;
