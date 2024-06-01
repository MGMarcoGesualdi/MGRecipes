import React, { useState } from 'react';
import { Box, Heading, Text, Textarea, Button, VStack, Divider } from '@chakra-ui/react';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');


    const handleAddReview = (reviewText) => {
        // Controlla se il campo della recensione è vuoto
        if (!reviewText.trim()) {
            // Se è vuoto, non fare nulla
            return;
        }

        // Simula la creazione di una nuova recensione
        const newReview = {
            id: reviews.length + 1,
            author: 'Utente Anonimo',
            text: reviewText
        };
        setReviews([...reviews, newReview]);
    };

    

    return (
        <Box>
            <Heading as="h3" size="md" mb="2">Aggiungi una recensione</Heading>
            <Textarea
                placeholder="Scrivi la tua recensione qui..."
                mb="2"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />
            <Button colorScheme="teal" onClick={() => handleAddReview(reviewText)}>Invia recensione</Button>
            <Divider mt="4" />
            <Heading as="h3" size="md" mt="4">Recensioni</Heading>
            <VStack align="stretch" spacing="4" mt="2">
                {reviews.map(review => (
                    <Box key={review.id} borderWidth="1px" borderRadius="lg" p="4">
                        <Text fontWeight="bold">{review.author}</Text>
                        <Text>{review.text}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}

export default ReviewSection;
