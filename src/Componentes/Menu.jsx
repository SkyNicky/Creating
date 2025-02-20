import React from "react"
import { Box,Button,ButtonGroup,Center,Divider,Heading,Image,Stack,Text,Card,CardBody,CardFooter,} from '@chakra-ui/react';
import styles from './Menu.module.css'

export function Hamburguers(props) {
    return(
        <>
         <Card maxW='sm' display='flex' flexDirection='column' height='100%'>
    <CardBody flex='1' className={styles.card} display='flex' flexDirection='column'>
      <Center>
        <Image
          className={styles.image}
          src={props.url}
          borderRadius='lg'
        />
      </Center>
      <Stack mt='6' spacing='3' flex='1' alignItems='center'>
        <Heading size='md'>{props.name}</Heading>
        <Box display='flex' justifyContent='center' flex='1' alignItems='center'>
          <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
        </Box>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter bgColor='#e65100' justifyContent='center'>
      <Center>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </Center>
    </CardFooter>
  </Card>
        </>
    )
}
export function HotD(props) {
    return(
        <>
         <Card maxW='sm' display='flex' flexDirection='column' height='100%'>
    <CardBody flex='1' className={styles.card} display='flex' flexDirection='column'>
      <Center>
        <Image
          className={styles.image}
          src={props.url}
          borderRadius='lg'
        />
      </Center>
      <Stack mt='6' spacing='3' flex='1' alignItems='center'>
        <Heading size='md'>{props.name}</Heading>
        <Box display='flex' justifyContent='center' flex='1' alignItems='center'>
          <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
        </Box>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter bgColor='#e65100' justifyContent='center'>
      <Center>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </Center>
    </CardFooter>
  </Card>
        </>
    )
}
export function Porcoes(props) {
    return(
        <>
     <Card maxW='sm' display='flex' flexDirection='column' height='100%'>
    <CardBody flex='1' className={styles.card} display='flex' flexDirection='column'>
      <Center>
        <Image
          className={styles.image}
          src={props.url}
          borderRadius='lg'
        />
      </Center>
      <Stack mt='6' spacing='3' flex='1' alignItems='center'>
        <Heading size='md'>{props.name}</Heading>
        <Box display='flex' justifyContent='center' flex='1' alignItems='center'>
          <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
        </Box>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter bgColor='#e65100' justifyContent='center'>
      <Center>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </Center>
    </CardFooter>
  </Card>
        </>
    )
}