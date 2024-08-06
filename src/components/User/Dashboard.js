// src/pages/Dashboard.js
import React from 'react';
import { Box, Text, Heading, Center } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Center height="100vh" bg="gray.100">
      <Box p={4} maxW="lg" mx="auto" bg="white" borderRadius="md" boxShadow="md">
        <Heading as="h1" size="lg" mb={4}>
          Dashboard
        </Heading>
        <Text fontSize="xl" color="gray.600">
          This page is currently under maintenance. Please check back later.
        </Text>
      </Box>
    </Center>
  );
};

export default Dashboard;
