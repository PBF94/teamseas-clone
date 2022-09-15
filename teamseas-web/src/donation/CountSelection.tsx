import {
  Box,
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import RadioCard from "./RadioCard";

interface Props {
  onNext: (values: any) => void;
  initialCount: number;
}

const OPTIONS = [5, 20, 50, 100];

const CountSelection = ({ onNext, initialCount }: Props) => {
  const [pounds, setPounds] = useState<number>(initialCount);
  const [customAmount, setCustomAmount] = useState(
    "" + (OPTIONS.includes(pounds) ? "" : pounds)
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "pounds",
    value: pounds,
    onChange: (nextValue) => {
      setCustomAmount("");
      setPounds(parseInt(nextValue));
    },
  });

  const group = getRootProps();

  const onNextStep = () => {
    onNext({ count: pounds });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h3" fontSize="md">
        JOIN #TEAMSEAS
      </Heading>
      <Text fontSize="md" fontWeight="bold">
        $1 removes a pound of thrash
      </Text>
      <SimpleGrid mt={8} columns={2} spacing={2} {...group}>
        {OPTIONS.map((value) => {
          const radio = getRadioProps({ value });

          return (
            <RadioCard key={value} {...radio}>
              {value} pounds
            </RadioCard>
          );
        })}
      </SimpleGrid>
      <NumberInput
        value={customAmount}
        onChange={(value) => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        onFocus={() => setPounds(0)}
      >
        <NumberInputField placeholder="Other amount..." />
      </NumberInput>
      <hr />

      <Button
        w="full"
        colorScheme="orange"
        size="lg"
        borderRadius="full"
        onClick={onNextStep}
      >
        Next
      </Button>
    </VStack>
  );
};

export default CountSelection;
