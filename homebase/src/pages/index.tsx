import styles from "@/styles/Home.module.css";

import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} mt={200}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="3xl">hi, I&apos;m Theo.</Heading>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="1xl" fontStyle={"italic"}>welcome to my piece of the internet</Heading>
        </Box>
      </Box>
    </>
  );
}
