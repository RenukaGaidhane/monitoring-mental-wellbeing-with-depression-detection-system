import React from "react";
import { Box, Image, Text, Button, AspectRatio } from "@chakra-ui/react";
import Card1 from "../images/Card1.jpeg";
import Card2 from "../images/Card2.jpeg";
import Card3 from "../images/Card3.jpeg";
import Card4 from "../images/Card4.jpeg";
import data1 from '../util/Data.json' // to be look after
export default function Gallary() {
    console.log('data1', data1.data1)
  const data = [
    {
      id: 1,
      imgSrc: Card1,
      title: "5 Tips to improve your Mental Health",
      subTitle: "by Sadghuru",
      Link: "https://www.youtube.com/watch?v=wOGqlVqyvCM",
    },
    {
      id: 2,
      imgSrc: Card2,
      title: "5 Ways To Deal With Depression",
      subTitle: "by Dr.Hansaji Yogendra",
      Link: "https://www.youtube.com/watch?v=Bk0lzv8hEU8",
    },
    {
      id: 3,
      imgSrc: Card3,
      title: "1 Simple way to Detox Mind and Body",
      subTitle: "by Bk. Shivani",
      Link: "https://www.youtube.com/watch?v=A1eHaHOugMg",
    },
    {
      id: 4,
      imgSrc: Card4,
      title: "Therapist explains How debt affects your Mental Health",
      subTitle: "by Real Life Psych",
      Link: "https://www.youtube.com/watch?v=SsuDutzcRWE",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      gap={8}
      data-aos="fade-up"
      width={"full"}
      mt={4}
    >
      {data.map((data) => (
        <Box
          key={data.id}
          p={7}
          textAlign={"center"}
          boxShadow="1px 0px 1px 0px rgba(137,214,178,1)"
          _hover={{ boxShadow: "-7px 8px 8px 0px rgba(137,214,178,1)" }}
          transition={"ease-in 0.4s"}
          width={{ base: "100%", md: "25%" }}
          borderRadius={"30px"} // Adjust width based on screen size
        >
          <AspectRatio ratio={1.3}>
            <Image src={data.imgSrc} objectFit="cover" />
          </AspectRatio>
          <Text mt={4} fontSize="md" letterSpacing={1}>
            {data.title}
          </Text>
          <Text fontSize="sm" fontStyle="italic" fontWeight="semi-bold" mt={3}>
            {data.subTitle}
          </Text>
          <Button
            colorScheme="green"
            onClick={() => window.open(data.Link)}
            mt={8}
          >
            Watch Video
          </Button>
        </Box>
      ))}
    </Box>
  );
}
