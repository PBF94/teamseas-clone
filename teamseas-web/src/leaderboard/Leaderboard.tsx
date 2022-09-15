import {
  Box,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { DonationData } from "../types";
import LeaderboardItem from "./LeaderboardItem";
import { useQuery } from "urql";

const DonationsQuery = `
    query GetAllDonations($orderBy: OrderByParams) {
        donations(orderBy: $orderBy) {
            id
            count
            displayName
            email
            mobile
            team
            message
            createdAt
        }
    }
`;

type DonationsQueryResponse = {
  donations: DonationData[];
};

interface Props {}

const Leaderboard = (props: Props) => {
  const [field, setField] = useState<string>("createdAt");

  const [{ data, fetching, error }] = useQuery<DonationsQueryResponse>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
  });

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (fetching || !data) return <p>Loading...</p>;

  return (
    <Box color="blue.700" mt={10} w="full">
      <VStack spacing={5}>
        <Heading fontWeight="black" size="2xl">
          LEADERBOARD
        </Heading>
        <RadioGroup onChange={setField} value={field}>
          <HStack>
            <Radio value="createdAt">Most recent</Radio>
            <Radio value="count">Most pounds</Radio>
          </HStack>
        </RadioGroup>
        <VStack spacing={5} mt={12} w="full">
          {data.donations.map((donation) => (
            <Flex
              key={donation.id}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <LeaderboardItem donation={donation} />
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Leaderboard;
