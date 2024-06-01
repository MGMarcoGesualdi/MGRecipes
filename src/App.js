import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Link as ChakraLink, Button, useColorMode,IconButton} from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NotFoundRoute from './pages/NotFoundRoute';
import AboutPage from './pages/AboutPage';
import recipes from './data/recipes';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" minHeight="100vh">
          <Flex align="center" justify="space-between" p="4" bg="#064439" color="white">
            <Box>
              <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold" color="#eee7ce">MG RECIPES</ChakraLink>
            </Box>
            <Box>
              <Button
                as={Link}
                to="/recipes"
                variant="outline"
                color="#eee7ce"
                mr="2"
                sx={{
                  ':hover': {
                    backgroundColor: '#f0e5b6',
                    color: '#000'
                  }
                }}
              >
                Ricette
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="outline"
                color="#eee7ce"
                mr="2"
                sx={{
                  ':hover': {
                    backgroundColor: '#f0e5b6',
                    color: '#000'
                  }
                }}
              >
                Su di me
              </Button>
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                color="#eee7ce"
                variant="outline"
                mr="2"
                sx={{
                  ':hover': {
                    backgroundColor: '#f0e5b6',
                    color: '#000'
                  }
                }}
              />
            </Box>
          </Flex>
          <Box mt="6" mx="4">
            <Routes>
              <Route path="/" element={<Home recipes={recipes} />} />
              <Route path="/recipes" element={<RecipeList />} />
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundRoute />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
