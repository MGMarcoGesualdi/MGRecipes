import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchFilter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <Flex>
            <Input
                placeholder="Cerca per nome"
                mb="3"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {/*<Select placeholder="Filtra per tempo di preparazione">
                <option value="short">Meno di 30 minuti</option>
                <option value="medium">30 - 60 minuti</option>
                <option value="long">Più di 60 minuti</option>
            </Select>*/}
            <Button bg="#064439" color="#eee7ce">Filtra</Button>
        </Flex>
    );
}

export default SearchFilter;
