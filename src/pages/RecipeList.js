import React, { useState, useEffect } from 'react';
import {
    Box, Heading, Flex, IconButton, HStack, Text, useMediaQuery, Menu, MenuButton,
    MenuList, MenuItem, Button,Image
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';
import NotFoundRecipe from '../assets/chefnotfindrecipe.png'

const RecipeList = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tutte");
    const [currentPage, setCurrentPage] = useState(1);
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

    const recipesPerPage = isSmallScreen ? 4 : 16;
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = selectedCategory === "Tutte" ? recipes : recipes.filter(recipe => recipe.category === selectedCategory);
    const displayedRecipes = currentRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(currentRecipes.length / recipesPerPage);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const categories = ["Tutte", "Antipasti", "Primi piatti", "Zuppe e Minestre", "Salse e Condimenti", "Pizze", "Secondi piatti", "Contorni", "Dolci"];

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4" color="#006a6a">Tutte le Ricette</Heading>
            <Flex alignItems="center" mb="4">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
                        {selectedCategory}
                    </MenuButton>
                    <MenuList>
                        {categories.map(category => (
                            <MenuItem key={category} onClick={() => handleCategoryChange(category)}>
                                {category}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Flex>
            <Flex flexWrap="wrap" mt="4" justifyContent="space-between">
                {displayedRecipes.length > 0 ? (
                    displayedRecipes.map(recipe => (
                        <Box key={recipe.id} mr="20px" mb="20px">
                            <RecipeCard recipe={recipe} />
                        </Box>
                    ))
                ) : (
                    <Flex width="100%" justifyContent="center" mt="4" flexDirection="column" alignItems="center">
                            <Image src={NotFoundRecipe} alt="Nessuna ricetta disponibile" mb="4" />
                        <Text fontSize="xl" color="red.500" textAlign="center">
                            🔴 Ops! Al momento non ci sono ricette disponibili. 🍴 Torna più tardi per scoprire e gustare nuove delizie straordinarie! 🌟
                        </Text>
                    </Flex>
                )}
            </Flex>
            <HStack justifyContent="center" position="fixed" bottom="20px" left="50%" transform="translateX(-50%)">
                {currentPage > 1 && (
                    <IconButton
                        aria-label="Pagina precedente"
                        icon={<ChevronLeftIcon />}
                        onClick={prevPage}
                    />
                )}
                <Text>{currentPage}</Text>
                {currentPage < totalPages && (
                    <IconButton
                        aria-label="Pagina successiva"
                        icon={<ChevronRightIcon />}
                        onClick={nextPage}
                    />
                )}
            </HStack>
        </Box>
    );
}

export default RecipeList;
