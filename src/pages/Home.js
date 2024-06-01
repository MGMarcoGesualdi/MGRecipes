import React from 'react';
import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import mgRecipesLogo from '../assets/mgrecipeslogo.png';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Box
                    width={{ base: '90%', md: '80%', lg: '70%' }}
                    textAlign="center"
                    mt={{ base: '-12', md: '-16', lg: '-24' }}
                    position="relative"
                    top={{ base: '-12', md: '-16', lg: '-24' }}
                >
                    <Heading as="h1" fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} fontWeight="bold" color="#006a6a" mb="8">
                        Benvenuti nel Ricettario Online di MGRecipes 🍽️
                    </Heading>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="center" alignItems="center" mb="8">
                        <Image src={mgRecipesLogo} alt="Chef Cooking" boxSize={{ base: '250px', md: '300px' }} objectFit="cover" borderRadius="full" mr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }} />
                        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color="#555" fontWeight="normal" maxWidth={{ base: '100%', md: '70%' }}>
                            Esplorate un mondo di sapori autentici e ricette straordinarie<br/> 
                            La vostra cucina non sarà mai stata così affascinante
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Footer />
        </>
    );
}

export default Home;
