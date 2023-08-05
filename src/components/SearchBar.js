import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import {BiSearchAlt} from "react-icons/bi"


function SearchBar({ handleSearchNote }) {
  return (
    <Box m={"10px"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearchAlt/>}
        />
        <Input type="search" placeholder="Search Review ....." borderColor={"#03001C"}  className="search-input" onChange={(event) => handleSearchNote(event.target.value)}/>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
