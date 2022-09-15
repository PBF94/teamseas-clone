import "@fontsource/montserrat";

import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  Heading,
  extendTheme,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import Counter from "./donation/Counter";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <VStack spacing={8}>
          <Logo h="32" pointerEvents="none" />
          <Heading as="h1" size="xl" color="blue.700" fontWeight="black">
            JOIN THE MOVEMENT!
          </Heading>
          <Text color="blue.600" fontWeight="light">
            The team is growing everyday and scoring wins for the planet.
            <br />
            Remove thrash with us and track out progress!
          </Text>
          <Heading as="h2" size="4xl" color="blue.700">
            <Counter from={0} to={1231231231} />
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
