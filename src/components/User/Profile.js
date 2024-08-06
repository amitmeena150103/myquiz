// src/pages/Profile.js
import React, { useContext } from 'react';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';
import quizContext from '../../context/quizContext';

const Profile = () => {
  const { user } = useContext(quizContext);

  if (!user) {
    return (
      <Box p={4}>
        <Text fontSize="xl">You are not logged in.</Text>
      </Box>
    );
  }

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="lg">Profile</Heading>
        <Box>
          <Text fontWeight="bold">Name:</Text>
          <Text>{user.name}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Email:</Text>
          <Text>{user.email}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;
