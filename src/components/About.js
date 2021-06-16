import { Flex } from "@chakra-ui/layout"
import { Image, VStack, Heading, HStack, Text, AspectRatio } from "@chakra-ui/react"


const InfoLabel = ({ title, info }) => {
    return (
        <HStack>
            <Heading size="md">{title}</Heading>
            <Text>{info}</Text>
        </HStack>
    )
}

const Info = () => {
    return (
        <VStack spacing={3} align="start" px="50px" pt="100px" pb="50px" m={{ sm: 4, lg: 0 }} bgColor={{ sm: "whiteAlpha.600", lg: "inherit" }} borderRadius="lg">
            <Flex justify="center" w="100%">
                <Heading size="lg">About Me</Heading>
            </Flex>
            <InfoLabel title="Name" info="Quinton L. Palomares" />
            <InfoLabel title="Address" info="3944 Oakridge Lane Macon, GA 31206" />
            <InfoLabel title="Tel." info="478-267-8914" />
            <InfoLabel title="Email" info="QuintonLPalomares@jourrapide.com" />
            <InfoLabel title="Work at" info="Road Runner Lawn Services" />
            <InfoLabel title="Occupation" info="Cellular technician" />
            <InfoLabel title="Favorite" info="Sushi" />
        </VStack>
    )
}

const About = () => {
    return (
        <section id="profile">
            <Flex pt="100px" direction={{ sm: "column", lg: "row" }}>
                <Flex flex={1} bgColor="red.100" >
                    <AspectRatio w="100%" ratio={4 / 3} >
                        <Image
                            src="https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt-cross-arms-chest-smiling-pleased_176420-21607.jpg?size=626&ext=jpg&ga=GA1.2.1151995299.1610236800"
                            objectFit="cover"
                        />
                    </AspectRatio>
                </Flex>
                <Flex flex={1}
                    bgImage="https://cdn.wallpapersafari.com/31/93/opIzLj.png"
                    bgSize="cover"
                    bgPosition="bottom">
                    <Info />
                </Flex>
            </Flex>
        </section>
    )
}

export default About
