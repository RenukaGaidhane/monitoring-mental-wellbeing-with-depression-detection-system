import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Button,
  FormControl,
  FormLabel,
  Heading,
  useToast,
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  CircularProgress
} from "@chakra-ui/react";
import { fetchS } from 'storage-script';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { GrSend } from "react-icons/gr";

// 
import Aos from "aos";
import "aos/dist/aos.css";

export default function Question() {
  useEffect(() => {
    Aos.init({
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  const data = fetchS('data');
  const questions = [
    { id: 1, text: 'Little interest or pleasure in doing things' },
    { id: 2, text: 'Feeling down, depressed or hopeless' },
    { id: 3, text: 'Trouble falling or staying asleep or sleeping too much' },
    { id: 4, text: 'Feeling Tired or having little energy' },
    { id: 5, text: 'Poor appetite or Overeating' },
    { id: 6, text: 'Feeling bad about yourself or that you are a failure or have let yourself or you are family down' },
    { id: 7, text: 'Trouble concentrating on things, such as reading the newspaper or watching television' },
    { id: 8, text: 'Moving or speaking so slowly that other people could have noticed or the opposite- being so fidgety or restless that you have been moing around the lot more that usually' },
    { id: 9, text: 'Thoughts that you would be better off dead, or hurting yourself ' },
    { id: 10, text: 'If you checked off any problems, how difficult have these problems made it for you at work, home, or woth other people ? ' },
  ];
  const questions2 = [
    { id: 1, text: 'How often do you feel sad or downhearted?' },
    { id: 2, text: 'Do you experience changes in your appetite (eating more or less) when you\'re feeling low?' },
    { id: 3, text: 'Have you noticed changes in your sleep patterns (sleeping too much or too little)?' },
    { id: 4, text: 'Do you often feel tired or lack energy, even after getting enough sleep?' },
    { id: 5, text: 'Have you lost interest in activities or hobbies that you used to enjoy?' },
    { id: 6, text: 'Do you have trouble concentrating or making decisions?' },
    { id: 7, text: 'Have you experienced feelings of worthlessness or guilt?' },
    { id: 8, text: 'Have you had thoughts of self-harm or suicide?' },
    { id: 9, text: 'Do you find yourself withdrawing from friends and family?' },
    { id: 10, text: 'Have you noticed changes in your school performance or attendance?' },
  ];
  
  const [answers, setAnswers] = useState({});
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const calculateDepressionLevel = () => {
    const scores = {
      "Not at all": 0,
      "Several Days": 1,
      "More Than half days": 2,
      "Nearly Everyday": 3,
    };

    let totalScore = 0;
    for (const question of data && data.adult === 'yes' ? questions : data.adult === 'no' ? questions2 : []) {
      const answer = answers[question.id];
      totalScore += scores[answer];
    }
    let depressionLevel = '';
    if (totalScore >= 0 && totalScore <= 4) {
      depressionLevel = 'Minimal Depression';
    } else if (totalScore >= 5 && totalScore <= 9) {
      depressionLevel = 'Mild Depression';
    } else if (totalScore >= 10 && totalScore <= 14) {
      depressionLevel = 'Moderate Depression';
    } else if (totalScore >= 15 && totalScore <= 19) {
      depressionLevel = 'Moderately Severe Depression';
    } else {
      depressionLevel = 'Severe Depression';
    }

    return depressionLevel;
  };
  const [depressionLevel , setdepressionLevel] = useState('');
  // spinner 
  const [showSpinner, setShowSpinner] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    onOpen();
    toast({
      title: "Answers Submitted",
      description: `Your answers have been submitted successfully.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position:'top'
    }); 
    setTimeout(() => {
      const depressionLevel1  = calculateDepressionLevel();
      setdepressionLevel(depressionLevel1)
      console.log('Depression Level:', depressionLevel);
      setShowSpinner(!showSpinner);
    }, 5000); // Wait for 5 seconds before calculating depression level
  };
  const close = () =>{
    setShowSpinner(!showSpinner)
    onClose();
  }
  return (
    <Center display={"flex"} flexDirection={"column"} p={2} data-aos='slide-left'>
      <Heading
        maxW={{ base: "100%", md: "60%" }}
        letterSpacing={1}
        p={10}
        fontSize="x-large"
        // fontFamily={'san-serif'}
      >
        Hello {data.firstName}, answer the following questions to know your test result
      </Heading>
      <Box boxShadow="inset 1px 1px 10px 1px #d2d2d2" borderRadius={'30px'} w={{ base: "100%", md: "50%" }} p={{ base: 12, md: 10 }}>
        <form onSubmit={handleSubmit}>
        {data && (data.adult === 'yes' ? questions : data.adult === 'no' ? questions2 : []).map((question) => (
  <Box key={question.id} mb={6}>
    <FormControl isRequired>
      <FormLabel fontSize={'x-large'}>Q{question.id}.{question.text}</FormLabel>
      <RadioGroup
        onChange={(value) => handleAnswerChange(question.id, value)}
        value={answers[question.id] || ''}
        display={'flex'}
        flexDirection={'column'}
        fontSize={'large'}
        p={4}
        gap={4}
      >
        <Radio value="Not at all">Not at all</Radio>
        <Radio value="Several Days">Several Days</Radio>
        <Radio value="More Than half days">More Than half days</Radio>
        <Radio value="Nearly Everyday">Nearly Everyday</Radio>
      </RadioGroup>
    </FormControl>
  </Box>
))}

          <Button type="submit" colorScheme="green" >Submit Answers&nbsp;<GrSend/></Button>
        </form>
      </Box>
      {/* loading modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false} >
        <ModalOverlay  backdropFilter='blur(1px)'/>
        <ModalContent border={'1px solid grey'} pb={10}>
          <ModalBody>
            {showSpinner  ? (
          <>
            Calculating the depression level, please wait! <br />
            <Center>
              <CircularProgress isIndeterminate color='green.300' mt={10} />
            </Center>
          </>
        ) : (
          <> Click the button, to see the result ! <br />
          <Center display={'flex'} flexDirection={'column'} gap={3}><Button variant={'ghost'} border={'1px solid'} mt={10} onClick={onClose}
                     as={RouterLink} to={`/result/${depressionLevel}`}>
            Result &nbsp;<FaExternalLinkAlt/>
          </Button> 
          <Button onClick={close} colorScheme='purple' size={'sm'}>Edit Answers</Button>
          </Center>
          </>
        )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
