import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import classes from '../HeaderMegaMenu.module.css';
import React from 'react'
import CategoryIcon from './CategoryIcons'

interface CategoryProps {
    categoryItem: {
        title: string;
        icon1: string;
        icon2: string;
        description: string;
    }
}
const CategoryList: React.FC<CategoryProps> = ({categoryItem}) => {
  return (
    <>
        <UnstyledButton className={classes.subLink} key={categoryItem.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="light" radius="md">
                    {/* <categoryItem.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} /> */}
                    <CategoryIcon iconType={categoryItem.icon1} iconType2={categoryItem.icon2} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>{categoryItem.title}</Text>
                    <Text size="xs" c="dimmed">{categoryItem.description}</Text>
                </div>
            </Group>
        </UnstyledButton>
    </>
  )
}

export default CategoryList