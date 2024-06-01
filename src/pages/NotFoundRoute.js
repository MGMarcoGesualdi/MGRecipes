import React from 'react';
import { Box, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
    const imageSize = useBreakpointValue({ base: "200px", md: "300px" });
    const headingSize = useBreakpointValue({ base: "lg", md: "xl" });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box textAlign="center" p="6" rounded="md" bg="white" boxShadow="lg">
                <Image src="https://media.giphy.com/media/zJdRkOn9kkgEfu12XV/giphy.gif" alt="Confused Chef" w={imageSize} mx="auto" mb="8" />
                <Heading as="h2" size={headingSize} color="#064439" mb="4">Ops! Qualcosa è andato storto...</Heading>
                <Text mt="4" fontSize="xl" color="gray.700">Sembra che questa pagina sia sfuggita alle nostre mani!</Text>
                <Text mt="4" fontSize="xl" color="gray.700">Ma niente paura! Torna alla <Link to="/"><Button variant="solid" color="#eee7ce" bg="#064439" size="lg" mt="4" sx={{
                    ':hover': {
                        backgroundColor: '#f0e5b6',
                        color: '#000'
                    }
                }}>Pagina Principale</Button></Link> e riproviamo insieme!</Text>
            </Box>
        </Box>
    );
}

export default NotFoundRoute;
