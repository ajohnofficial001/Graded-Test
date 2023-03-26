import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="#fff" borderRadius="lg">
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack textAlign="start" p="4" color="black" mt="6" spacing="3">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Text fontWeight="bold" fontSize="lg">
          See more
          <FontAwesomeIcon p="13px" icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
