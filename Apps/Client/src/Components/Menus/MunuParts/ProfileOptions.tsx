
import {
    Group,
    UnstyledButton,
    Text,
    Avatar,
    Menu,
    rem,
    useMantineTheme,
} from '@mantine/core';
import cx from 'clsx';
import {
    IconChevronDown,
    IconLogout,
    IconHeart,
    IconMessage,
    IconSettings,
    IconUser,
    IconTruck,
} from '@tabler/icons-react';
import classes from '../HeaderMegaMenu.module.css';

import { user } from '../MenuData/UserData';
import { useState } from 'react';
import '../MenuStyle.scss'

//const baseClassProfile = 'container-profile'

function ProfileOptions() {

    const theme = useMantineTheme();

    const [userMenuOpened, setUserMenuOpened] = useState(false);

    return (
        <>
            <Menu
                //    className={`${baseClassProfile}__fix-position`}
                zIndex={1000000}
                width={260}
                position="bottom-start"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
            >
                <Menu.Target >
                    <UnstyledButton
                        className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                    >
                        <Group gap={7}>
                            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                            <Text fw={500} size="sm" lh={1} mr={3}>
                                {user.name}
                            </Text>
                            <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Label>Tienda</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconHeart
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Mis Favoritos
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconTruck
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.green[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Mis Compras
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconMessage
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        }
                    >
                        Mis Comentarios
                    </Menu.Item>
                    <Menu.Label>Ajustes</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconUser style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Editar Perfil
                    </Menu.Item>
                    <Menu.Item
                        leftSection={
                            <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Configurar Cuenta
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Label>Otros</Menu.Label>
                    <Menu.Item
                        leftSection={
                            <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                    >
                        Cerrar Sesion
                    </Menu.Item>

                </Menu.Dropdown>
            </Menu >
        </>
    )
}

export default ProfileOptions