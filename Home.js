import {
  Heading,
  Center,
  Box,
  Flex,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import HImag from "../images/Home.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
// animation library
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Box w={"full"} h={"90dvh"} zIndex={1} >
      <Flex direction={{ base: "column", md: "row" }}>
        {/* hero-banner-text */}
        <Box flex={"50%"}>
          
          <Center
            
            height={'full'}
          >
            <Box pos={'relative'}>
            <Box
            pos="absolute"
            top="-2px"
            right="0px"
            bottom="-3px"
            left="0px"
            rounded="lg"
            opacity={0.5}
          //  data-aos="zoom-in"

            // bgGradient="linear-gradient(to left, #e7eaed, #b4ceff, #edf4ff);"
            bgGradient={'linear-gradient(to right top, #f6dac1, #f6c396, #f4ab6d, #f09344, #eb7912)'}
            transform={{base :"rotate(-3deg)" , md:"rotate(-1deg)"}}
          ></Box>
          <Box bg={'white'} pos={'relative'} p={20} display={'flex'} gap={10} 
           flexDirection={"column"}
           data-aos="fade-right"
           rounded={'lg'}
           >
            <Heading maxW={{ base: "100%", md: "60%" }}>
              What is your Mental well being score ?
            </Heading>
            <Text>
              Take <span style={{fontSize:'large' }}>MHQ</span> test <br /> It's anonymous and 15 minutes to take.<br/>
              <span style={{fontWeight:'bold'}}>Avalaible for both adults and childrens</span>
            </Text>
            <Button colorScheme="orange" _hover={{boxShadow:'lg' , gap:'1px'}} transition={'ease-in-out 0.7s'}
             as={RouterLink} to={'/test'}> Lets Start &nbsp;<FaExternalLinkAlt /> </Button>
            </Box>
            </Box>
          </Center>
          
        </Box>
        
        {/* Image-home */}
        <Box flex={"40%"}>
          {" "}
          <Center p={5} 
          //  boxShadow={'md'}
           >
            {" "}
            <Image src={HImag}  
           data-aos="zoom-in"
            
            p={5} />{" "}
          </Center>
        </Box>
      </Flex>
      <Footer/>
    </Box>
  );
}
