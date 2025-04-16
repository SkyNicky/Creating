import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import styles from "./Menu.module.css";

export function Hamburguers(props) {
  return (
    <Card
      maxW="sm"
      w="250px"
      h="380px"
      borderRadius="2xl"
      boxShadow="lg"
      bg="white"
      overflow="hidden"
    >
      <CardBody className={styles.card} p="4">
        <Center mb="3">
          <Image
            src={props.url}
            alt={props.name}
            className={styles.image}
            borderRadius="md"
            boxSize="180px"
            objectFit="cover"
          />
        </Center>
        <Stack spacing="2" align="center">
          <Heading size="sm" noOfLines={2} textAlign="center">
            {props.name}
          </Heading>
          <Text color="blue.600" fontSize="xl" fontWeight="bold">
            {props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center" bg="#e65100">
        <Button colorScheme="blue" size="sm">
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}

export function HotD(props) {
  return (
    <Card
      maxW="sm"
      w="250px"
      h="380px"
      borderRadius="2xl"
      boxShadow="lg"
      bg="white"
      overflow="hidden"
    >
      <CardBody className={styles.card} p="4">
        <Center mb="3">
          <Image
            src={props.url}
            alt={props.name}
            className={styles.image}
            borderRadius="md"
            boxSize="180px"
            objectFit="cover"
          />
        </Center>
        <Stack spacing="2" align="center">
          <Heading size="sm" noOfLines={2} textAlign="center">
            {props.name}
          </Heading>
          <Text color="blue.600" fontSize="xl" fontWeight="bold">
            {props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center" bg="#e65100">
        <Button colorScheme="blue" size="sm">
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Porcoes(props) {
  return (
    <Card
      maxW="sm"
      w="250px"
      h="380px"
      borderRadius="2xl"
      boxShadow="lg"
      bg="white"
      overflow="hidden"
    >
      <CardBody className={styles.card} p="4">
        <Center mb="3">
          <Image
            src={props.url}
            alt={props.name}
            className={styles.image}
            borderRadius="md"
            boxSize="180px"
            objectFit="cover"
          />
        </Center>
        <Stack spacing="2" align="center">
          <Heading size="sm" noOfLines={2} textAlign="center">
            {props.name}
          </Heading>
          <Text color="blue.600" fontSize="xl" fontWeight="bold">
            {props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center" bg="#e65100">
        <Button colorScheme="blue" size="sm">
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}
