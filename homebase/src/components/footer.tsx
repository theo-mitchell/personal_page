import { Box } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box display='flex' alignItems={"center"} justifyContent={"center"}>
      <footer>
        <p>
          Made with
          <span role="img" aria-label="love">
            ❤️
          </span>
          &nbsp;by <a href="https://twitter.com/oluwaseun_">Theo Mitchell</a>
        </p>
      </footer>
    </Box>
  );
};

export default Footer;
