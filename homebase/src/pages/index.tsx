"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MenuButtonComponent from "@/components/menuButton";

import { Box, MenuButton, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>theo_dev.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          bg="green"
          display={"flex"}
          flexDirection={"column"}
          mt={200}
          p={10}
        >
          <Box
            bg="tomato"
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="4xl">hi, I&apos;m Theo.</Heading>
          </Box>
          <Box
            bg="yellow"
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="2xl">welcome to my piece of the internet</Heading>
          </Box>
        </Box>
      </main>
    </>
  );
}
