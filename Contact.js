import React, { useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  Avatar,
  Tag,
} from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import data1 from "../util/Data.json"; // to be look after
import Footer from "./Footer";
// 
import Aos from "aos";
import "aos/dist/aos.css";
export default function Contact() {
    useEffect(() => {
        Aos.init({
          // disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        });
      }, []);
  console.log("data1", data1.data1);
  const data = [
    {
      id: 1,
     
      title: "Dr.Prashali",
      subTitle: "Psychatrist",
      email: "prashali@example.com",
      MNO: "9011545044",
    },
    {
      id: 2,
     
      title: "Dr.Renuka",
      subTitle: "Psychatrist",
      email: "renuka@example.com",
      MNO: "8552029717",
    },
    {
      id: 3,
   
      title: "Dr.Janvi",
      subTitle: "Psychatrist",
      email: "janvi@example.com",
      MNO: "8657061200",
    },
  ];
  return (
    <>
      <Box h={"fit-content"} p={'50px'}>
        <Center p={3} mt={10}>
          <Heading
            maxW={{ base: "100%", md: "60%" }}
            fontFamily={"san-serif"}
            letterSpacing={2}
            data-aos='slide-down'
          >
            OUR TEAM
          </Heading>
        </Center>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={8}
          data-aos="fade"
          width={"full"}
          mt={10}
          justifyContent={"space-around"}
        >
          {data.map((data) => (
            <Box
              key={data.id}
              p={7}
              textAlign={"center"}
              boxShadow="1px 3px 5px 1px skyblue"
              _hover={{ boxShadow: "-7px 8px 8px 0px skyblue" }}
              transition={"ease-in 0.4s"}
              width={{ base: "100%", md: "25%" }}
              borderRadius={"30px"} // Adjust width based on screen size
            >
              {/* <AspectRatio ratio={1.3}>
            <Image src={data.imgSrc} objectFit="cover" />
          </AspectRatio> */}
              <Avatar size={"2xl"} name={data.title.split(".")[1]} />
              <Text mt={4} fontSize={'x-large'} letterSpacing={1}>
                {data.title}
              </Text>
              <Text
                fontSize="sm"
                fontStyle="italic"
                fontWeight="semi-bold"
                mt={3}
              >
                {data.subTitle}
              </Text>
              <Tag
                mt={4}
                fontSize="md"
                letterSpacing={1}
                p={3}
                w={'fit-content'}
                cursor={"pointer"}
                _hover={{bg:'blue.100'}}
                transition={"ease-in-out 0.4s"}
                onClick={() => {
                  window.location.href = `mailto:${data.email}`;
                }}
              >
               <IoMailSharp/>&nbsp;{data.email}
              </Tag>
              <Button
                colorScheme="blue"
                onClick={() => window.location.href = `tel:${data.MNO}`}
                mt={8}
                variant={'ghost'}
              >
                <FaPhone/>&nbsp;{data.MNO}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
