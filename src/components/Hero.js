import { Flex } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"

const Hero = () => {
    return (
        <Flex direction="column" h="600px" align="center" pt="120px" mt="70px"
            bgImage="https://i.pinimg.com/originals/ca/7d/86/ca7d8627f7fe82ac0a1e006836088362.jpg"
            bgSize="cover"
            bgPosition="center"
            justify="center"
        >
            <Heading size="4xl" shadow="lg" color="white" bgColor="gray.600" textTransform="uppercase">My Website</Heading>
            <Heading size="xl" mt="20px" shadow="lg" color="gray.600" bgColor="gray.300">React Website with Chakra UI</Heading>
        </Flex>
    )
}

export default Hero