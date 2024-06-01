import React from 'react';
import { Box, Heading, Text, List, ListItem, Divider, VStack } from '@chakra-ui/react';

const RecipeDetail = ({ recipe }) => {
    // Ensure instructions are processed to maintain dashes and new lines
    const instructionsArray = Array.isArray(recipe.instructions)
        ? recipe.instructions
        : recipe.instructions.split('-').map(instruction => instruction.trim()).filter(instruction => instruction);

    return (
        <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="md" maxWidth="675px" mx="auto" my="6">
            <VStack spacing="4" align="start">
                <Heading as="h2" size="xl" mb="4">{recipe.name}</Heading>

                <Box>
                    <Text fontSize="lg" fontWeight="bold" color="#006a6a">Tempo di preparazione:</Text>
                    <Text fontSize="md" mb="2">
                        {recipe.preparation ? `${recipe.preparation} Minuti` : "Non c'è un tempo specifico"}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="lg" fontWeight="bold" color="#006a6a">Tempo di cottura:</Text>
                    <Text fontSize="md" mb="4">
                        {recipe.cookTime ? `${recipe.cookTime} Minuti` : "Non c'è un tempo specifico"}
                    </Text>
                </Box>

                <Divider />

                {/* Sezione degli ingredienti */}
                <Box w="100%">
                    <Text fontSize="lg" fontWeight="bold" mb="2" color="#006a6a">Ingredienti:</Text>
                    <List styleType="disc" pl="4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index} mb="2">
                                {ingredient}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider />

                {/* Sezione delle istruzioni */}
                <Box w="100%">
                    <Text fontSize="lg" fontWeight="bold" mb="2" color="#006a6a">Istruzioni:</Text>
                    <List styleType="none" pl="0">
                        {instructionsArray.map((instruction, index) => (
                            <ListItem key={index} mb="2" display="flex" alignItems="baseline">
                                <Text as="span" mr="2">-</Text>
                                <Text>{instruction}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </VStack>
        </Box>
    );
}

export default RecipeDetail;
