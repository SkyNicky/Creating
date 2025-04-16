// Menu.jsx
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import styles from "./Menu.module.css";

// Função de truncamento de texto
function truncate(text, limit = 24) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

// Componente genérico de card
function ProductCard({ url, name, price }) {
  return (
    <Card
      maxW="sm"
      w="250px"
      h="380px"
      borderRadius="2xl"
      boxShadow="lg"
      bg="white"
      overflow="hidden"
      className={styles.card}
    >
      <CardBody p="0">
        <Center mt="4">
          <Image
            src={url}
            alt={name}
            className={styles.image}
            borderRadius="md"
            boxSize="180px"
            objectFit="cover"
          />
        </Center>
        <Stack spacing="1" align="center" mt="3" px="4">
          <Heading
            as="h3"
            size="sm"
            className={styles.name}
            title={name}
          >
            {truncate(name)}
          </Heading>
          <Text className={styles.price}>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center" p="3" className={styles.footer}>
        <Button colorScheme="blue" size="sm" className={styles.addButton}>
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}

// Exporta componentes específicos, mas todos usam ProductCard
export const Hamburguers = props => <ProductCard {...props} />;
export const HotD      = props => <ProductCard {...props} />;
export const Porcoes   = props => <ProductCard {...props} />;
