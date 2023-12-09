
import {
    ActionIcon,
    TextInput,
    TextInputProps,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { Autocomplete } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import classes from '../HeaderMegaMenu.module.css';
import { useState } from 'react';
import { dataProduct } from '../MenuData/ProductData';


interface Product {
    id: number;
    title: string;
    description: string;
}

function SearchField(props: TextInputProps) {

    const theme = useMantineTheme()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputTerm = e.target.value
        setSearchTerm(inputTerm);

        if (inputTerm.trim() === '') {
            setSearchResults([]);
            return;
        }
        const results = dataProduct.filter(product =>
            product.title.toLowerCase().includes(inputTerm.toLowerCase())
        );

        setSearchResults(results);
    };

    const handleProductClick = (productId: number) => {
        console.log('Producto seleccionado:', productId);
    };

    const handleSearchButton = () => {
        console.log('Letras ingresadas:', searchTerm);
    };

    return (
        <>
            <div className="search-container">
                <TextInput
                    value={searchTerm}
                    onChange={handleSearch}
                    radius="xl"
                    size="md"
                    placeholder="Realizar Busqueda..."
                    rightSectionWidth={42}
                    leftSection={
                        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }

                    rightSection={
                        <ActionIcon
                            onClick={handleSearchButton}
                            size={32}
                            radius="xl"
                            color={theme.primaryColor}
                            variant="filled">
                            <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    }
                    {...props}
                />
                {
                    searchResults.length > 0 &&
                    (
                        <div className="results-container">
                            {searchResults.map(product => (
                                <div
                                    key={product.id}
                                    className="result-item"
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    {product.title}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchField