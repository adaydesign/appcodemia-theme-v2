import React from 'react'
import { Flex, VStack, Heading, Text, HStack, Icon, Input, Textarea, Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/layout';
import { AiFillMobile, AiFillMail, AiFillEnvironment, AiOutlineSend } from "react-icons/ai";

const ContactInfoLabel = ({ icon, title, value }) => {
    return (
        <HStack spacing={2} bgColor="blue.100" borderRadius="md" p={2} w="100%" align="start">
            <Icon as={icon} fontSize="4xl" color="blue.800" />
            <Flex direction="column">
                <Heading size="sm">{title}</Heading>
                <Text>{value}</Text>
            </Flex>
        </HStack>
    )
}

const ContactInfo = () => {
    return (
        <VStack mt={10} mx={5}>
            <ContactInfoLabel icon={AiFillMobile} title="Call Me" value="478-267-8914" />
            <ContactInfoLabel icon={AiFillMail} title="Email" value="QuintonLPalomares@jourrapide.com" />
            <ContactInfoLabel icon={AiFillEnvironment} title="Location" value="3944 Oakridge Lane Macon, GA 31206" />
        </VStack>
    )
}

const ContactForm = () => {
    return (
        <VStack spacing={2} mt={10} mx={5}>
            <HStack w="full">
                <Input flex={1} placeholder="First Name" />
                <Input flex={1} placeholder="Last Name" />
            </HStack>
            <Input placeholder="Email" />
            <Textarea placeholder="Message" rows={4} />
            <Button leftIcon={<AiOutlineSend />} colorScheme="blue">Send Message</Button>
        </VStack>
    )
}


const ContactLayout = () => {
    return (
        <SimpleGrid columns={{ sm: 1, lg: 2 }} w="full" px={10}>
            <ContactInfo />
            <ContactForm />
        </SimpleGrid>
    )
}

const Contact = () => {
    return (
        <section id="contact">
            <VStack pt="100px" mb="50px" spacing={10} mx={{ sm: 0, lg: 100 }} >
                <VStack w={{ sm: "100%", lg: "80%" }}>
                    <Heading size="lg">Contact Me</Heading>
                    <ContactLayout />
                </VStack>
            </VStack>
        </section>
    )
}

export default Contact
