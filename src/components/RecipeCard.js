import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    // Ottieni il colore del testo per i titoli
    const titleColor = "#006A6A";

    // Url dell'immagine di fallback
    const fallbackImageUrl = "https://media.giphy.com/media/zJdRkOn9kkgEfu12XV/giphy.gif";

    return (
        <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
            <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" marginBottom="20px">
                {recipe.image ? (
                    <Image src={recipe.image} alt={recipe.title} />
                ) : (
                    <Image src={fallbackImageUrl} alt="Image not available" />
                )}
                <Text p="4" fontWeight="bold" fontSize="16px" color={titleColor} textAlign="center">{recipe.title}</Text>
            </Box>
        </Link>
    );
}

export default RecipeCard;
