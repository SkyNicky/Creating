import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import styles from './Menu.module.css';

function ProductCard({ url, name, price }) {
  return (
    <Card maxW='sm' className={styles.card}>
      <CardBody className={styles.cardBody}>
        <Center>
          <Image
            className={styles.image}
            src={url}
            alt={name}
            borderRadius='lg'
          />
        </Center>
        <Stack mt='6' spacing='3' alignItems='center'>
          <Heading size='md' textAlign='center'>{name}</Heading>
          <Text color='blue.600' fontSize='2xl'>{price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter className={styles.footer}>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' _hover={{ transform: "scale(1.05)" }}>
            Adicionar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export function Hamburguers(props) {
  return <ProductCard {...props} />;
}
export function HotD(props) {
  return <ProductCard {...props} />;
}
export function Porcoes(props) {
  return <ProductCard {...props} />;
}
