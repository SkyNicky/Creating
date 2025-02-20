import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, FormControl, FormLabel, Input, Textarea, HStack, Button } from '@chakra-ui/react'; 
import styles from './Contato.module.css'; 

export function Contato() {
    return (
        <div className={styles.container}>
            <HStack spacing="4"> 
                <Box w="50%">
                    <Center>
                        <FormControl w="100%" maxW="400px" p="2" borderRadius={5} boxShadow="0 1px 2px #dd8818">
                            <FormLabel>Nome Completo</FormLabel>
                            <Input size="lg" bgColor="white" id="nome" placeholder="Nome Completo" _placeholder={{ color: "black" }} />
                            
                            <FormLabel mt="4">E-mail</FormLabel>
                            <Input size="lg" bgColor="white" id="email" placeholder="E-mail" _placeholder={{ color: "black" }} />
                            
                            <FormLabel mt="4">Mensagem</FormLabel>
                            <Textarea size="lg" bgColor="white" id="mensagem" placeholder="Digite sua mensagem..." _placeholder={{ color: "black" }} />
                            
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

                <Box w="50%">
                    <div className={styles.contactInfo}>
                        <h1 className={styles.title}>Contatos</h1>
                        <p>
                            <Link to="tel:+5532999999999" className={styles.cel}>Telefone: (32) 99999-9999</Link>
                        </p>
                        <p>
                            <Link to="Email" className={styles.cel}>Email: MixBurguer@gmail.com</Link>
                        </p>
                        <p>
                            <Link to="WhatsApp" className={styles.cel}>WhatsApp: (32) 99999-9999</Link>
                        </p>

                        <div className={styles.rSociais}>
                            <Link to="#" className={styles.instagram}><i className="fab fa-instagram"></i></Link>
                            <Link to="#" className={styles.twitter}><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className={styles.facebook}><i className="fab fa-facebook"></i></Link>
                            <Link to="#" className={styles.linkedin}><i className="fab fa-linkedin"></i></Link>
                            <Link to="#" className={styles.whatsapp}><i className="fab fa-whatsapp"></i></Link>
                        </div>
                    </div>
                </Box>
            </HStack>
        </div>
    );
}
