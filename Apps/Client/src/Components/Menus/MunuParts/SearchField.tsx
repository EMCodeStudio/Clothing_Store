import {
    ActionIcon,
    TextInput,
    TextInputProps,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
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
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const searchRef = useRef<HTMLInputElement | null>(null);

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
        setIsSearchVisible(true); 
    };

    const handleProductClick = (productId: number) => {
        console.log('Producto seleccionado:', productId);
    };

    const handleSearchButton = () => {
        console.log('Letras ingresadas:', searchTerm);
    };

    const handleClickOutsideSearch = (e: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
            setIsSearchVisible(false);
        }
    };
    

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideSearch);
        return () => {
            document.removeEventListener('click', handleClickOutsideSearch);
        };
    }, []);

    return (

        <div className="search-container" ref={searchRef}>


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
            {isSearchVisible && (
                <>
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
                </>
            )}
        </div>

    )
}

export default SearchField