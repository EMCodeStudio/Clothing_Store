
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

function SearchField(props: TextInputProps) {

    const theme = useMantineTheme()
    return (
        <>
            { /*  <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                data={['Traje', 'Pantalon']}
                visibleFrom="xs" 
            />*/}

           
           
            
                <TextInput
                    radius="xl"
                    size="md"
                    placeholder="Realizar Busqueda..."
                    rightSectionWidth={42}
                    leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                    rightSection={
                        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">

                            <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    }
                    {...props}
                />
           










        </>
    )
}

export default SearchField