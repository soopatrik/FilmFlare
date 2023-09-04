import React from 'react';
import { Box, Button, Center, Flex, Heading, HStack, Icon, IconButton, Input, Text, useColorMode, VStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Dashboard: React.FC = () => {

    return (
        <Box bg="blackAlpha.700" bgImage="url(/assets/intro.jpg)" bgSize="cover" bgBlendMode="darken" minH="100vh" >
        <Center h="100vh" w="100vw">
        <VStack bg="gray.900" color="white" p={8} borderRadius="md" spacing={8} m="auto" maxW="80vw">
          <Icon as={StarIcon} w={10} h={10} />
            <Heading color="yellow">FilmFlare</Heading>
             <Text color="gray.300">Watch Movies Online in HD for Free!</Text>
            <Input placeholder="Search" bg="gray.700" color="black" w="500px" _placeholder={{ color: 'yellow' }} textAlign="center" />
            <Button colorScheme="yellow" onClick={() => {/* Navigate to homepage */}}>Go to Homepage</Button>
            <Text>Top Search Recommendations</Text>
            /* Recommendations list goes here */
            <Box p={4}>
              <Text>Welcome to FilmFlare, the ultimate destination for movie lovers! Get ready to unlock a world of cinematic wonders with our extensive database and a host of exciting features. With an unparalleled collection of films spanning genres, eras, and languages, FilmFlare ensures there's something for every taste and mood.</Text>
            </Box>
          </VStack>
        </Center>
      </Box>
      );
    }

export default Dashboard
