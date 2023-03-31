import {
    Box,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
  } from "@chakra-ui/react";
const NavButton = () => {
  return (
    <>
      <Box p={5}>
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

export default NavButton;
