import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Heading } from '@chakra-ui/react';
import RecipeDetail from '../components/RecipeDetail';
import ReviewSection from '../components/ReviewSection';
import recipes from '../data/recipes';

const RecipeDetailPage = () => {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">{recipe.name}</Heading>
            <Divider mb="4" />
            <RecipeDetail recipe={recipe} />
            <Divider my="4" />
            <ReviewSection />
        </Box>
    );
}

export default RecipeDetailPage;