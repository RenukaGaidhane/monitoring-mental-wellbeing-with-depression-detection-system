import { Center, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HImag from "../images/Home.png";
// animation-lib
import Aos from "aos";
import "aos/dist/aos.css";
import Gallary from "./Gallary";
import Footer from "./Footer";

export default function About() {
  useEffect(() => {
    Aos.init({
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <Box h={"fit content"}>
      <Box
        bg={"white"}
        pos={"relative"}
        p={{ base: 7, md: 20 }}
        display={"flex"}
        gap={10}
        flexDirection={"column"}
        rounded={"lg"}
      >
        <Center>
          <Heading
            maxW={{ base: "100%", md: "60%" }}
            fontFamily={"san-serif"}
            letterSpacing={0}
          >
            ABOUT US
          </Heading>
        </Center>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          mt={7}
        >
          <Image
            src={HImag}
            boxSize={{ base: "100px", md: "350px" }}
            boxShadow={"3px 2px 4px 0px rgba(224,217,224,1);"}
            p={4}
            borderRadius={"40px"}
            data-aos="fade-right"
            float="left"
          />
          <Text p={{ base: 0, md: 10 }} data-aos="fade-left" fontSize={{base:"large",md:"x-large"}}
          textAlign={'justify'} >
            Our depression detection website is designed with empathy and
            understanding at its core. We recognize the importance of mental
            health and aim to provide a safe space for individuals to explore
            their feelings. Through a user-friendly interface and carefully
            crafted questions, our platform helps users assess their emotional
            well-being and identify potential signs of depression. Whether it's
            feeling overwhelmed by daily tasks or experiencing persistent
            sadness, our tool offers personalized insights and resources to
            support users on their journey towards mental wellness. Your
            emotional health matters, and we're here to help you navigate
            through it with compassion and guidance.
          </Text>
        </Box>
        {/* <Button colorScheme="orange" _hover={{boxShadow:'lg'}} transition={'ease-in 0.3s'}> Lets Start </Button> */}
      </Box>
      {/* gallery */}
      <Box
        bg={"white"}
        pos={"relative"}
        p={{ base: 7, md: 20 }}
        display={"flex"}
        gap={10}
        flexDirection={"column"}
      >
        <Center>
          <Heading
            maxW={{ base: "100%", md: "60%" }}
            fontFamily={"san-serif"}
            letterSpacing={0}
          >
            GALLERY
          </Heading>
        </Center>
        <Center>
          <Box display={"flex"} w={"full"}>
            <Gallary />
          </Box>
        </Center>

        {/* <Button colorScheme="orange" _hover={{boxShadow:'lg'}} transition={'ease-in 0.3s'}> Lets Start </Button> */}
      </Box>
      <Footer />
    </Box>
  );
}
