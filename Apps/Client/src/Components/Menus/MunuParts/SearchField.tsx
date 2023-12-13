import { useState } from 'react';
import { ActionIcon, TextInput, TextInputProps, rem, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconCircleX, IconEyeSearch, IconSearch } from '@tabler/icons-react';
import { dataProduct } from '../MenuData/ProductData';
import { useClickOutside } from '@mantine/hooks';
import { ClearButtonSearch } from '../../Styled/Buttons/ClearButton';
import { ListResultSearch, ResultItemSearch } from '../../Styled/List/SearchListResult';
interface Product {
    id: number;
    title: string;
    description: string;
}

function SearchField(props: TextInputProps) {

    const theme = useMantineTheme()
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [searchDataOpened, setSerchDataOpened] = useState(false);
    const ref = useClickOutside(() => setSerchDataOpened(false));

    //const [isSearchVisible, setIsSearchVisible] = useState(true);
    // const searchRef = useRef<HTMLInputElement | null>(null);

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
        setSerchDataOpened(true)
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    const handleProductClick = (productId: number) => {
        console.log('Producto seleccionado:', productId);
    };
    const handleSearchButton = () => {
        console.log('Letras ingresadas:', searchTerm);
    };

    /*  const handleClickOutsideSearch = (e: MouseEvent) => { */
    /*      if (searchRef.current && !searchRef.current.contains(e.target as Node)) { */
    /*          setIsSearchVisible(false); */
    /*      } */
    /*  }; */

    /*  useEffect(() => { */
    /*      document.addEventListener('click', handleClickOutsideSearch); */
    /*      return () => { */
    /*          document.removeEventListener('click', handleClickOutsideSearch); */
    /*      }; */
    /*  }, []); */

    return (

        <div className="search-container"
            ref={ref}
        //ref={searchRef}
        >
            <div className="search-input">
                <TextInput
                    type='search'
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
                {searchTerm && (
                    /*  <button type='button' className="clear-button" onClick={handleClearSearch}> 
                         &#x2715; 
                     </button> */

                    <ClearButtonSearch onClick={handleClearSearch} ><IconCircleX /></ClearButtonSearch>

                )}
            </div>
            {searchDataOpened && (
                <>
                    {
                        searchResults.length > 0 &&
                        (
                            <ListResultSearch>
                                {searchResults.map(product => (
                                    <ResultItemSearch key={product.id} onClick={() => handleProductClick(product.id)}
                                    >
                                        <span className="icon"><IconEyeSearch size={16}  /* color={theme.colors.blue[6]} */ /></span>
                                        <div className="item-content">
                                            <p>  {product.title}</p>
                                        </div>

                                    </ResultItemSearch>
                                ))}
                            </ListResultSearch>
                        )
                    }
                </>
            )}
        </div>
    )
}

export default SearchField