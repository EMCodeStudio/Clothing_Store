
import {
    rem,
} from '@mantine/core';
import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from '../HeaderMegaMenu.module.css';

function SearchField() {
    return (
        <>
            <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                data={['Traje', 'Pantalon']}
                visibleFrom="xs" />
        </>
    )
}

export default SearchField