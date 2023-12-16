import { Box, Center, Collapse, Group, Text, ThemeIcon, UnstyledButton, rem, useMantineTheme } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import classes from '../HeaderMegaMenu.module.css';
import { useDisclosure } from "@mantine/hooks";
import { categotyData } from "../MenuData/CategoryData";


const MenuOptionsTwo = () => {
    
    const theme = useMantineTheme();
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

    const links = categotyData.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                 {/*    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} /> */}
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
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                    <Box component="span" mr={5}>
                        Moda
                    </Box>
                    <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                    />
                </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
                Ofertas
            </a>
            <a href="#" className={classes.link}>
                Ayuda / PQR
            </a>
        </>
    )
}

export default MenuOptionsTwo