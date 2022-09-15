import { Avatar, Badge, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { DonationData } from "../types";
import formatDate from "../utils/formatDate";

interface Props {
  donation: DonationData;
}
const LeaderboardItem = ({ donation }: Props) => {
  const { displayName, team, message, count, createdAt } = donation;
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      maxW="xl"
      w="full"
      borderRadius="lg"
      alignItems="center"
      gap={5}
    >
      <Avatar size="lg" />
      <HStack justifyContent="space-between" h="full" flex="1">
        <VStack
          alignItems="flex-start"
          justifyContent="center"
          textAlign="left"
        >
          <Text
            fontWeight="bold"
            color="blue.500"
            fontSize="sm"
            textTransform="uppercase"
          >
            {team || ""}
          </Text>
          <Text fontWeight="bold">{displayName}</Text>
          <Text fontSize="sm">{message || ""}</Text>
        </VStack>
        <VStack justifyContent="space-around" alignItems="flex-end">
          <Badge
            colorScheme="blue"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            as="div"
          >
            {count.toLocaleString()} pounds
          </Badge>
          <Text fontSize="sm">{formatDate(createdAt)}</Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default LeaderboardItem;
