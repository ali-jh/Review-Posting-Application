import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {MdReviews} from "react-icons/md"
const Header = () => {
  return (
    <Box display={"flex"} mt="10px" ml="10px" mb="10px">
      <Text mr={"5px"} fontSize="2rem">Review Corner</Text>
      <MdReviews/>
    </Box>
  );
};

export default Header;
