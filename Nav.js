import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      bg={"white"}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      boxShadow="md"
      p={4}
      pos={'sticky'}
      top={-2.5}
      transition={'ease-in 0.3s'}
      zIndex={999}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Box display={"flex"} fontFamily={'san-serif'} fontSize={"x-large"} as={RouterLink} to={'/'}>
          Depression Test
        </Box>
        <Spacer />
        <HStack
          justifyContent={"space-between"}
          gap={4}
          display={{ base: "none", md: "flex" }}
        >
          <Button
            colorScheme="green"
            variant={"ghost"}
            as={RouterLink}
            to={"/about"}
          >
            About
          </Button>
          <Button colorScheme="green" variant={"ghost"}
           as={RouterLink} to={'/contact'}>
            Contact
          </Button>
          <Button colorScheme="blue" 
           as={RouterLink} to={'/test'}>Try Test</Button>
          {/* <Button colorScheme="green" variant={"ghost"}>
            Result
          </Button> */}
        </HStack>
        {/* responsive  menu b0x  -- tablet --- mobile  */}
        <Menu>
          <MenuButton as={Button} display={{ base: "flex", md: "none" }}>
            <CiMenuFries color="#121212" fontSize={"large"} />
          </MenuButton>
          <MenuList display={"flex"} flexDirection={'column'} p={4} gap={5}>
            <Button
              colorScheme="green"
              variant={"ghost"}
              as={RouterLink}
              to={"/about"}
            >
              About
            </Button>
            <Button colorScheme="green" variant={"ghost"}
                as={RouterLink} to={'/contact'}>
              Contact
            </Button>
            <Button colorScheme="blue"as={RouterLink} to={'/test'}>Try Test</Button>
            {/* <Button colorScheme="green" variant={"ghost"}>
              Result
            </Button> */}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
