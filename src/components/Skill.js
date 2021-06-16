import React from 'react'
import { VStack, Heading, Text, Flex, HStack, Image, Progress, Spacer, SimpleGrid } from '@chakra-ui/react'
import skillList from '../assets/data/skill.json'

const frontEndSkilList = skillList.filter(i => i.type === "frontend")
const backEndSkilList = skillList.filter(i => i.type === "backend")

const SkillItem = ({ data }) => {
    return (
        <HStack align="center" spacing={4} p={4} bgColor={data.highligh && 'gray.50'} borderRadius={data.highligh && 'lg'} mb={2}>
            <Image src={data.image}
                boxSize="70px"
                borderRadius="full" />
            <Flex direction="column" w="100%">
                <Flex>
                    <Heading size="sm" textTransform="capitalize">{data.name}</Heading>
                    <Spacer />
                    <Text>{data.exp}%</Text>
                </Flex>
                <HStack w="100%">
                    <Progress flex={1} colorScheme="blue" size="sm" value={data.exp} max={100} />
                </HStack>
            </Flex>
        </HStack>
    )
}

const FrontEndList = () => {
    return (
        <Flex w="100%" direction="column">
            <Flex borderWidth={1} p={4} align="center" direction="column">
                <Heading size="md">Front End Developer</Heading>
                <Text size="md" color="gray.600">More than 4 years</Text>
            </Flex>
            {
                frontEndSkilList.map((item, i) => (
                    <SkillItem key={`frontend_item_${i}`} data={item} />
                ))
            }
        </Flex>
    )
}

const BackEndList = () => {
    return (
        <Flex w="100%" direction="column">
            <Flex borderWidth={1} p={4} align="center" direction="column">
                <Heading size="md">Back End Developer</Heading>
                <Text size="md" color="gray.600">More than 2 years</Text>
            </Flex>
            {
                backEndSkilList.map((item, i) => (
                    <SkillItem key={`frontend_item_${i}`} data={item} />
                ))
            }
        </Flex>
    )
}

const TechnicalSkillTable = () => {
    return (
        <SimpleGrid columns={{ sm: 1, lg: 2 }} w="100%">
            <FrontEndList />
            <BackEndList />
        </SimpleGrid>
    )
}

const Skill = () => {
    return (
        <section id="skill">
            <VStack pt="100px" spacing={10} mx={{ sm: 20, lg: 100 }} >
                <VStack w={{ sm: "100%", lg: "70%" }}>
                    <Heading size="lg">Skill</Heading>
                    <Text size="md">My technical experience</Text>
                    <Text size="sm" color="gray.400" fontStyle="italic">The number of percentage in progress bar represent the most usually tool that i used</Text>
                    <TechnicalSkillTable />
                </VStack>
            </VStack>
        </section>
    )
}

export default Skill
