import { Anchor, Box, Button, Center, Divider, Group, HoverCard, SimpleGrid, Text, rem, useMantineTheme } from "@mantine/core"
import classes from '../HeaderMegaMenu.module.css';
import { IconChevronDown } from "@tabler/icons-react";
import { categotyData } from "../MenuData/CategoryData";
import '../MenuStyle.scss'
import CategoryList from "./CategoryList";

const MenuOptionsOne = () => {

    const theme = useMantineTheme()

    const links = categotyData.map((item) => (
     <CategoryList categoryItem={item}/>
    ))

    return (
        <>
            <a href="#" className={classes.link}>Inicio</a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                    <a href="#" className={classes.link}>
                        <Center inline>
                            <Box component="span" mr={5}>Moda</Box>
                            <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]}/>
                        </Center>
                    </a>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <Group justify="space-between" px="md">
                        <Text fw={500}>Nuestras Categorias</Text>
                        <Anchor href="#" fz="xs">Explorar Mas</Anchor>
                    </Group>
                    <Divider my="sm" />
                    <SimpleGrid cols={2} spacing={0}>{links}</SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">Contactanos</Text>
                                <Text size="xs" c="dimmed">Informacion de Contacto y Asesorias</Text>
                            </div>
                            <Button variant="default">Contacto</Button>
                        </Group>
                    </div>
                </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>Ofertas</a>
            <a href="#" className={classes.link}> Ayuda / PQR</a>
        </>
    )
}

export default MenuOptionsOne