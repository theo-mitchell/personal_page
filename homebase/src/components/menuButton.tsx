import {
    Box,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
  } from "@chakra-ui/react";
const MenuButton = () => {
  return (
    <>
      <Box>
        <Menu>
          <MenuButton>menu</MenuButton>
          <MenuList>
            <MenuItem as="a" href="/">
              main
            </MenuItem>
            <MenuItem>blog</MenuItem>
            <MenuItem>contact</MenuItem>
            <MenuItem>resume</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default MenuButton;
