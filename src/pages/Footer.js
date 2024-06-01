import React from 'react';
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import mglogo from '../assets/MGLogo.png';

const Footer = () => {
    // Usa useColorModeValue per ottenere i colori appropriati per la modalità attuale
    const bgColor = useColorModeValue('#f0f0f0', '#1a202c');
    const textColor = useColorModeValue('#555', '#ddd');

    return (
        <Box
            bg={bgColor}
            py="4"
            px="6"
            position="fixed"
            bottom="0px"
            left="0"
            right="0"
            zIndex="1000"
            width="100vw"
        >
            <Flex justifyContent="space-between" alignItems="center" maxWidth="1400px" mx="auto">
                <Box>
                    <Text fontSize="sm" color={textColor}>
                        © 2024 MGRecipes.
                    </Text>
                    <Text fontSize="sm" color={textColor}>
                        Tutti i diritti riservati.
                    </Text>
                </Box>
                <Flex alignItems="center">
                    <Text fontSize="sm" color={textColor} mr="2">
                        Sviluppato da Marco Gesualdi
                    </Text>
                    <Box>
                        <Image src={mglogo} alt="Marco Gesualdi" boxSize="40px" />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;
