import { Box, Heading, VStack } from "@chakra-ui/react";
import LeaderboardItem from "./LeaderboardItem";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <Box color="blue.700" mt={10} w="full">
      <Heading fontWeight="black">LEADERBOARD</Heading>
      <VStack spacing={5} mt={12}>
        <LeaderboardItem
          donation={{
            displayName: "Bogdan",
            count: 1000,
            email: "test@test.ro",
            createdAt: "2022-09-15T11:47:05.828Z",
            team: "Team Name",
            message: "Enjoy",
          }}
        />

        <LeaderboardItem
          donation={{
            displayName: "Bogdan",
            count: 1000,
            email: "test@test.ro",
            createdAt: "2022-09-15T11:47:05.828Z",
            team: "Team Name",
            message: "Enjoy",
          }}
        />
        <LeaderboardItem
          donation={{
            displayName: "Bogdan",
            count: 1000,
            email: "test@test.ro",
            createdAt: "2022-09-15T11:47:05.828Z",
          }}
        />
      </VStack>
    </Box>
  );
};

export default Leaderboard;
