import { Anchor, Box, Button, Center, Divider, Group, HoverCard, SimpleGrid, Text, ThemeIcon, UnstyledButton, rem, useMantineTheme } from "@mantine/core"
import classes from '../HeaderMegaMenu.module.css';
import { IconChevronDown } from "@tabler/icons-react";
import { mockdata } from "../MenuData/MenuData";
import '../MenuStyle.scss'
import CategoryIcon from "./CategoryIcons";
const MenuOptionsOne = () => {

    const theme = useMantineTheme()

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="light" radius="md">

                    {/* <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} /> */}
                  {/*   <img className="category-icons" src={item.icon} alt="" /> */}

                  <CategoryIcon iconType={item.icon1} iconType2={item.icon2}/>
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));
    return (
        <>
            <a href="#" className={classes.link}>
                Inicio
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                    <a href="#" className={classes.link}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Moda
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </a>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <Group justify="space-between" px="md">
                        <Text fw={500}>Nuestras Categorias</Text>
                        <Anchor href="#" fz="xs">
                            Explorar Mas
                        </Anchor>
                    </Group>
                    <Divider my="sm" />
                    <SimpleGrid cols={2} spacing={0}>
                        {links}
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">
                                    Contactanos
                                </Text>
                                <Text size="xs" c="dimmed">
                                    Informacion de Contacto y Asesorias
                                </Text>
                            </div>
                            <Button variant="default">Contacto</Button>
                        </Group>
                    </div>
                </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
                Ofertas
            </a>
            <a href="#" className={classes.link}>
                Ayuda / PQR
            </a>
        </>
    )
}

export default MenuOptionsOne