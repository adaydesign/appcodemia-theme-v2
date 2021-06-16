import { Flex, Text, IconButton, Spacer, HStack } from "@chakra-ui/react"
import { AiFillFacebook, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <Flex bgColor="blue.800" color="white" py={3} px={8} align="center">
            <Text textTransform="capitalize">footer @ my website</Text>
            <Spacer />
            <HStack spacing={2}>
                <IconButton variant="outline" rounded="full" icon={<AiFillFacebook />} />
                <IconButton variant="outline" rounded="full" icon={<AiFillTwitterCircle />} />
                <IconButton variant="outline" rounded="full" icon={<AiFillYoutube />} />
            </HStack>
        </Flex>
    )
}

export default Footer
