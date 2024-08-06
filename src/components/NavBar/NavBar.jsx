
import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  MenuList,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import quizContext from '../../context/quizContext';
import logo from './../../Assets/logo.png';

export default function BetterNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setuser } = useContext(quizContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setuser(null);
    navigate('/login');
  };

  return (
    <>
      <Box
        bg={useColorModeValue('black', 'gray.900')}
        px={4}
        borderBottom="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Avatar size="sm" src={logo} w={10} h={10} />
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to={user ? `/account/${user._id}` : '/login'}
              >
                <HStack>
                  <FaHome />
                  <Text fontWeight="bold">Home</Text>
                </HStack>
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                <HStack>
                  <InfoIcon />
                  <Text fontWeight="bold">About</Text>
                </HStack>
              </Link>
              <Menu className='bg-black'>
                <MenuButton
                  as={Button}
                  rightIcon={<FaUser />}
                  variant="outline"
                  className='bg-black'
                >
                  {user ? user.name : 'User'}
                </MenuButton>
                <MenuList className='bg-black'>
                  {user ? (
                    <>
                       <Link to="/Profile" >
                        <MenuItem className='bg-black'>Profile</MenuItem>
                      </Link>
                      <Link to="/dashboard" >
                        <MenuItem className='bg-black'>Dashboard</MenuItem>
                      </Link>
                      {/* <Link to={'/login'}> */}
                      <MenuItem onClick={handleLogout} className='bg-black'>Logout</MenuItem>
                      {/* </Link> */}
                    </>
                  ) : (
                    <Link to="/login">
                      <MenuItem className='bg-black'>
                        <FaSignInAlt /> Signup
                      </MenuItem>
                    </Link>
                  )}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                  to={user ? `/account/${user._id}` : '/login'}
              >
                <HStack>
                  <FaHome />
                  <Text fontWeight="bold">Home</Text>
                </HStack>
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                <HStack>
                  <InfoIcon />
                  <Text fontWeight="bold">About</Text>
                </HStack>
              </Link>
              <Menu className='bg-black'>
                <MenuButton
                  as={Button}
                  rightIcon={<FaUser />}
                  variant="outline"
                  className='bg-black'
                >
                  {user ? user.name : 'User'}
                </MenuButton>
                <MenuList className='bg-black'>
                  {user ? (
                    <>
                      <Link to="/Profile" >
                        <MenuItem className='bg-black'>Profile</MenuItem>
                      </Link>
                      <Link to="/dashboard">
                        <MenuItem className='bg-black'>Dashboard</MenuItem>
                      </Link>
                      <MenuItem onClick={handleLogout} className='bg-black hover:text-red-500'>Logout</MenuItem>
                    </>
                  ) : (
                    <Link to="/login">
                      <MenuItem className='bg-black'>
                        <FaSignInAlt /> Signup
                      </MenuItem>
                    </Link>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}

