import {
    Group,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
} from '@mantine/core';

import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import SearchField from './MunuParts/SearchField';
import LoginButtons from './MunuParts/LoginButtons';
import ProfileOptions from './MunuParts/ProfileOptions';
import FavoriteCartOptions from './MunuParts/FavoriteCartOptions';
import MenuOptionsOne from './MunuParts/MenuOptionsOne';
import MenuOptionsTwo from './MunuParts/MenuOptionsTwo';

export function HeaderMegaMenu() {

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (

        <Box pb={60}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">

                    <MantineLogo size={30} />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <MenuOptionsOne />
                    </Group>

                    <Group >
                        <SearchField />
                    </Group>

                    <Group visibleFrom='sm' >
                        <ProfileOptions />
                    </Group>

                    {/*   <Group visibleFrom="sm"> */}
                    {/*       <LoginButtons /> */}
                    {/*   </Group> */}


                    <Group visibleFrom='sm' >
                        <FavoriteCartOptions />
                    </Group>


                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />

                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Menu de Navegacion"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">

                    <Divider my="sm" />
                    <MenuOptionsTwo />
                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <ProfileOptions />
                    </Group>
                    {/*   <Group justify="center" grow pb="xl" px="md"> */}
                    {/*       <SearchField /> */}
                    {/*   </Group> */}

                    {/*   <Group justify="center" grow pb="xl" px="md"> */}
                    {/*       <LoginButtons /> */}
                    {/*   </Group> */}

                </ScrollArea>

            </Drawer>
        </Box>

    );
}