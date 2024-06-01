import React from 'react';
import { Box, Heading, Text, Image, Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import cookingImage from '../assets/mgrecipeslogo.png';
import mglogo from '../assets/MGLogo.png';

const AboutPage = () => {
    const bgColor = useColorModeValue('#f0f0f0', '#1a202c');
    const textColor = useColorModeValue('#555', '#ddd');
    return (
        <Box position="relative" minHeight="100vh">
            <Box p="4">
                <Heading as="h1" mb="4" fontSize={{ base: '2xl', md: '4xl' }} textAlign="center" color="#006a6a">Su di me</Heading>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" mb="6">
                    <Stack spacing="4" flex={{ base: '1', md: '50%' }}>
                        <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="left">
                            Benvenuto nel mio angolo culinario virtuale, dove ogni ricetta racconta una storia di passione e creatività.<br/> 
                            Attraverso MG Recipes, spero di portare un po' di gusto e ispirazione nella tua cucina quotidiana.
                        </Text>
                        <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="left">
                            Tra i miei preferiti ci sono piatti italiani tradizionali. Spero che le ricette italiane che troverai<br/>qui siano di tuogradimento e ti ispirino a esplorare la ricca cucina italiana!
                        </Text>
                        <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="left">
                            La mia missione è quella di rendere la cucina divertente, accessibile e gratificante per tutti,<br/> 
                            indipendentemente dal livello di esperienza.<br/> 
                            Spero che MG Recipes ti ispiri a metterti ai fornelli e a sperimentare con nuovi sapori e tecniche culinarie.
                        </Text>
                        <Flex mt="4" justify="center">
                            <Link href="#" mr="4" fontSize={{ base: 'md', md: 'lg' }}>Seguimi su Facebook</Link>
                            <Link href="#" fontSize={{ base: 'md', md: 'lg' }}>Seguimi su Instagram</Link>
                        </Flex>
                    </Stack>
                    <Image src={cookingImage} alt="Cucina" boxSize={{ base: '100%', md: '300px' }} objectFit="cover" borderRadius="md" />
                </Flex>
            </Box>
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
            <br/>
        </Box>
    );
}

export default AboutPage;
