import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Heading,
  Radio,
  RadioGroup,
  useToast,
} from "@chakra-ui/react";
import { GrSend } from "react-icons/gr";
import { store } from "storage-script";
import { Link as RouterLink } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Test() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  const [isDisabled, setDisabled] = useState(false);
  const [subS, setSubS] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    adult: "",
  });

  const handleInputChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      adult: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    store("data", formData);
    setSubS(true);
    setDisabled(!isDisabled);
    setFormData({
      firstName: "",
      lastName: "",
      adult: "",
      email: "",
      gender: "",
    });
    toast({
      title: "Thank You for providing the information",
      description: "Click the Next button to proceed!",
      status: "success",
      duration: 10000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Center display={"flex"} flexDirection={"column"} p={2} data-aos="fade-in">
      <Heading
        maxW={{ base: "100%", md: "60%" }}
        fontFamily={"san-serif"}
        letterSpacing={1}
        p={10}
        fontSize="x-large"
      >
        FILL UP THE INFORMATION
      </Heading>
      <Box
        boxShadow="inset 1px 1px 10px 1px #d2d2d2"
        borderRadius={"30px"}
        w={{ base: "100%", md: "50%" }}
        p={{ base: 12, md: 10 }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="firstName" mb={4} isRequired>
            <FormLabel>First Name:</FormLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              disabled={isDisabled}
            />
          </FormControl>

          <FormControl id="lastName" mb={4} isRequired>
            <FormLabel>Last Name:</FormLabel>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              disabled={isDisabled}
            />
          </FormControl>

          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={isDisabled}
            />
          </FormControl>

          <FormControl id="gender" mb={4} isRequired>
            <FormLabel>Gender:</FormLabel>
            <Select
              name="gender"
              placeholder="Select gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              required
              disabled={isDisabled}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="dob" mb={4} isRequired>
            <FormLabel>Are you above 18?</FormLabel>
            <RadioGroup
              id="adult"
              mb={4}
              value={formData.adult}
              onChange={handleInputChange}
              isDisabled={isDisabled}
            >
              <Box display={"flex"} gap={5}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Box>
            </RadioGroup>
          </FormControl>

          <Center>
            <Button
              type="submit"
              colorScheme="blue"
              _hover={{
                bg: "transparent",
                color: "#121212",
                border: "1px solid gray",
              }}
              transition={"ease-out 0.5s"}
              display={!subS ? "flex" : "none"}
            >
              Submit <GrSend />
            </Button>
            <Button
              display={subS ? "flex" : "none"}
              bg={"transparent"}
              color={"black"}
              border={"1px solid"}
              as={RouterLink}
              to={"/question"}
              boxShadow={"1px 1px 1px 1px #121212"}
            >
              Next <BiSend />
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
}
