import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CountSelection from "./CountSelection";

type Props = {};

const DonationWizard = (props: Props) => {
  const [step, setStep] = useState<number>(0);
  const [donationDetails, setDonationsDetails] = useState({
    count: 20,
  });

  const onNext = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };

    setStep((previous) => previous + 1);
    setDonationsDetails(mergedDetails);
  };

  const onPrevious = () => {
    setStep((previous) => previous - 1);
  };

  const pages = [
    <CountSelection onNext={onNext} initialCount={donationDetails.count} />,
    <div>page 2</div>,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
      <VStack spacing={2}>
        <Button
          w="full"
          colorScheme="orange"
          size="lg"
          borderRadius="full"
          onClick={() => onNext}
        >
          Next
        </Button>
        <Button
          w="full"
          variant="ghost"
          fontSize="sm"
          color="gray.700"
          size="lg"
          borderRadius="full"
          onClick={onPrevious}
        >
          Previous
        </Button>
      </VStack>
    </Box>
  );
};

export default DonationWizard;
