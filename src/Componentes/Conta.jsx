import { Box, Center, FormControl, FormLabel, HStack, Input, Button } from "@chakra-ui/react";

export function Conta() {
  return (
    <Box>
      <Center>
        <FormControl w="100%" maxW="600px" p="2" borderRadius={5} boxShadow="0 1px 2px #dd8818'" >
          <HStack>
            <Box>
              <FormLabel>Nome Completo</FormLabel>
              <Input size="lg" bgColor="white" id="nome" placeholder="Nome Completo" _placeholder={{ color: "black" }} />
            </Box>
            <Box>
              <FormLabel>E-mail</FormLabel>
              <Input size="lg" bgColor="white" id="email" placeholder="E-mail" _placeholder={{ color: "black" }} />
            </Box>
            <Box>
              <FormLabel>Senha</FormLabel>
              <Input size="lg" bgColor="white" id="senha" type="text" placeholder="*****" _placeholder={{ color: "black" }} />
            </Box>
          </HStack>

          <HStack>
            <Box w='100%'>
              <FormLabel pt='10px'>Celular</FormLabel>
              <Input size="lg" bgColor="white" id="cel" type="number" placeholder="Celular" _placeholder={{ color: "black" }} />
            </Box>
          </HStack>

          <HStack>
            <Box width='50%'>
              <FormLabel pt='10px'>Endereço</FormLabel>
              <Input size="lg" bgColor="white" id="endereco" placeholder="Endereço" _placeholder={{ color: "black" }} />
            </Box>
            <Box width='50%'>
              <FormLabel pt='10px'>Cidade</FormLabel>
              <Input size="lg" bgColor="white" id="cidade" placeholder="Cidade" _placeholder={{ color: "black" }} />
            </Box>
          </HStack>

          <Box pt='8px'>
          <Center>
            <Button bgColor="black" color="#dd8818" size="lg">
              Enviar
            </Button>
          </Center>
          </Box>
        </FormControl>
      </Center>
    </Box>
  );
}
