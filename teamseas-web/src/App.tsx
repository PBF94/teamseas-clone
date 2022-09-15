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
import { useQuery, useSubscription } from "urql";
import Leaderboard from "./leaderboard/Leaderboard";

const TotalDonationsQuery = `
  query GetTotalDonations {
   totalDonations 
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const handleSubscription = (previous: any, newTotal: any) => {
  return newTotal.totalUpdated.total;
};

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => {
  const [res] = useSubscription(
    {
      query: TotalUpdatedQuery,
    },
    handleSubscription
  );

  const [{ data, fetching, error }] = useQuery({
    query: TotalDonationsQuery,
  });

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>Error {JSON.stringify(error)}</p>;

  return (
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
              <Counter from={0} to={res.data || data.totalDonations} />
            </Heading>
            <Leaderboard />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
