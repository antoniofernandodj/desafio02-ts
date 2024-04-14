import { Box, Flex, Spacer, useBreakpointValue } from '@chakra-ui/react';
import './Header.css'


export const Header = () => {
  const displayMenuIcon = useBreakpointValue({ base: true, lg: false });

  return (
    <Box as="header" bg="blue.500" color="white" py="4">
      <Flex maxW="6xl" mx="auto" align="center">
        <Box flex="1" textAlign="center" fontWeight="bold" fontSize="2xl">
          Dio Bank
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
};
