import { Box } from "@chakra-ui/react";

import MenuButton from "./navButton";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <Box display="flex" flexDirection={"column"} minHeight={"100vh"}>
      <Box flexGrow={0} flexShrink={0}>
        <MenuButton />
      </Box>
      <Box flexGrow={1} flexShrink={0}>
        <main>{children}</main>
      </Box>
      <Box flexGrow={0} flexShrink={0}>
        <Footer />
      </Box>
    </Box>
  );
}
