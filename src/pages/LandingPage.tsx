
import React, { useState } from 'react';
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const LandingPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
        navigate('/dashboard');
      };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-r, yellow.600, gray.800)"
      color="white"
    >
      <Box>
        <Text fontSize="6xl" mb={10}>
          FilmFlare
        </Text>
      </Box>
      <Box mb={3}>
        <Input placeholder="Username" bg="white" color="black" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Box>
      <Box mb={6}>
      <Input placeholder="Password" type="password" bg="white" color="black" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Button colorScheme="teal" size="lg" mb={6} onClick={handleLogin}>
        Login
      </Button>
      <Text>
        Don't have an account? <Button colorScheme="red" variant="link">Register</Button>
      </Text>
    </Flex>
  );
};

export default LandingPage;