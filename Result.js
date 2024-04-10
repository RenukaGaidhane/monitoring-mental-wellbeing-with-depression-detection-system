import React, { useEffect, useState } from "react";
import { Box, Heading, Center, Text, Flex, AspectRatio, Divider } from "@chakra-ui/react";
import { fetchS } from "storage-script";
import { useParams } from "react-router-dom";

export default function Result() {
  const { id } = useParams();
  const [markerPosition, setMarkerPosition] = useState("50%"); // Default position
  const data = fetchS("data");

  const content = [
    {
      name: 'Minimal Depression',
      head: 'People with mild depression can ask their doctor about medication, but they may prefer to start with lifestyle alterations. Experts have suggested that making changes in the following may help:',
      list: [
        "Maintain a balanced diet.",
        "Stay active and maintain regular exercise levels.",
        "Engage in recreational activities for distraction and social interaction.",
        "Consider music therapy as a form of relaxation.",
        "Incorporate relaxation techniques and meditation into your routine.",
        "Ensure good sleep habits by sticking to a consistent sleep schedule.",
        "Seek contact with supportive individuals for emotional well-being.",
        "Interact with pets and animals for companionship and stress reduction.",
        "Reduce the use of alcohol and tobacco for better overall health."
      ],
      foot: 'There is strong evidence to support some of these, such as exercise and sleep, but scientists need to do more studies to confirm the use of others.',
      link: "https://www.youtube.com/embed/VfvFE4rKn3c"
    },
    {
      name: 'Mild Depression',
      head: 'When supporting someone experiencing moderate-level depression, it is important to provide empathy, understanding, and practical assistance. Here are some suggestions:',
      list: [
        "Encourage seeking professional help when needed.",
        "Listen actively and validate feelings.",
        "Encourage maintaining a routine for stability.",
        "Promote self-care practices for mental well-being.",
        "Offer practical support in times of need.",
        "Engage in social activities for connection and support.",
        "Explore hobbies and interests for enjoyment and fulfillment.",
        "Limit exposure to stressors whenever possible.",
        "Monitor your mental and emotional health regularly.",
        "Educate yourself and have open discussions about mental health.",
        "Stay connected with supportive individuals and communities.",
        "Monitor progress and celebrate achievements along the way."
      ],
      foot: 'Remember, each person\'s experience with depression is unique, so it is essential to approach support with empathy and flexibility. Encourage them to take small steps toward self-care and professional help, and be patient throughout their journey to recovery.',
      link: "https://www.youtube.com/embed/2Y2N15K7emM"
    },
    {
      name: 'High Depression',
      head: 'When it comes to addressing or supporting someone dealing with high-level depression, it is important to approach it with sensitivity and care. Here are some suggestions:',
      list: [
        "Encourage seeking professional help when needed.",
        "Medication can be a helpful tool when prescribed and managed properly.",
        "Build and maintain support networks for ongoing support.",
        "Encourage self-care practices for mental and emotional well-being.",
        "Avoid isolation by staying connected with others.",
        "Validate feelings and emotions to promote healthy emotional expression.",
        "Monitor safety and take necessary precautions.",
        "Educate yourself about mental health to better understand and support others.",
        "Practice patience with yourself and others during challenging times.",
        "Encourage engaging in activities that bring joy and fulfillment.",
        "Provide practical support to help manage daily challenges.",
        "Stay connected with supportive individuals and communities."
      ],
      foot: 'Remember that supporting someone with depression can be challenging, so make sure to take care of your own mental health and seek guidance from professionals if needed.',
      link: "https://www.youtube.com/embed/N4Jk9Cu3WM8"
    }
  ];

  useEffect(() => {
    setMarkerPosition(calculateMarkerPosition(id));
  }, [id]);

  // Calculate marker position based on depression level
  const calculateMarkerPosition = (depressionLevel) => {
    switch (depressionLevel) {
      case "Minimal Depression":
        return "10%";
      case "Mild Depression":
        return "30%";
      case "Moderate Depression":
        return "50%";
      case "Moderately Severe Depression":
        return "70%";
      case "Severe Depression":
        return "90%";
      default:
        return "50%";
    }
  };

  // Find the content based on the depression level
  let currentContent;
  if (id === "Minimal Depression") {
    currentContent = content.find(item => item.name === 'Minimal Depression');
  } else if (id === "Mild Depression" || id === "Moderate Depression") {
    currentContent = content.find(item => item.name === 'Mild Depression');
  } else {
    currentContent = content.find(item => item.name === 'High Depression');
  }

  if (!currentContent) {
    return <Text>Error: Content not found for the selected depression level.</Text>;
  }

  return (
    <>
      <Center>
        <Heading
          maxW={{ base: "100%", md: "60%" }}
          letterSpacing={1}
          p={10}
          fontSize="x-large"
        >
          Hello {data.firstName}, your result is here
        </Heading>
      </Center>

      {/* Result Scale */}
      <Center>
        <Box position="relative" width={{ base: "90%", md: "50%" }} mt={8}>
          {/* Scale Bar */}
          <Box
            bgGradient={`linear(to-r, green.400, red.400)`}
            h="90px"
            borderRadius="md"
          />

          {/* Scale Markers */}
          <Box
            position="absolute"
            top="-20px" // Adjust marker position as needed
            left="0"
            width="100%"
            display="flex"
            justifyContent="space-between"
            color="black"
          >
            <Text fontSize="sm">Low</Text>
            <Text fontSize="sm">Moderate</Text>
            <Text fontSize="sm">High</Text>
          </Box>

          {/* Notation */}
          <Box
            mt={-28}
            pos={"relative"}
            left={markerPosition}
            zIndex={1}
            w={"fit-content"}
          >
            <Box
              bg="gray.500"
              borderRadius={"40px"}
              color="black"
              h="130px"
              w={"5px"}
            ></Box>
          </Box>
        </Box>
      </Center>
      <Center mt={10} p={10}>
        <Text fontSize={'large'}>  - The scale shows you have a {id}<br/>
         - Here are some recommended Tips and a Video for you 
        </Text>
      </Center>
      <Divider/>
      <Flex p={10} gap={10} flexDirection={{base:'column-reverse',md:'row'}}>
        <Box flex={'50%'}>
          <AspectRatio ratio={16/9}>
            <iframe
              title='Mental Health Video'
              src={currentContent.link}
              allowFullScreen
              style={{borderRadius:'20px', boxShadow:'3px 2px 4px 0px rgba(224,217,224,1)'}}
            />
          </AspectRatio>
        </Box>
        <Box  flex={'50%'} fontSize={'large'} fontFamily={'sans-serif'} textAlign={'justify'}>
          <Heading as="h3" fontSize="xl" mb={4}>
            {currentContent.head}
          </Heading>
          <ul>
            {currentContent.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Text mt={4}>{currentContent.foot}</Text>
        </Box>
      </Flex>
    </>
  );
}
