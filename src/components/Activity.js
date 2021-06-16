import React from 'react'
import { VStack, Heading, SimpleGrid, Flex, Image, Text } from '@chakra-ui/react'
import activityList from '../assets/data/activity.json'

const ActivityItem = ({ item, i }) => {
    return (
        <Flex direction="column" align="center" key={`activity_${i}`} mb={{ sm: 8, md: 0 }}>
            <Image boxSize="200px" rounded="full" objectFit="cover" shadow="md"
                src={item.image} />
            <Text fontSize="lg" fontWeight="bold" mt={10}>{item.name}</Text>
            <Flex px={20}>
                <Text noOfLines={5}>{item.detail}</Text>
            </Flex>
        </Flex>
    )
}


const ActivityList = () => {

    return (
        <SimpleGrid columns={{ md: 1, lg: 3 }}>
            {
                activityList.map((item, i) => (<ActivityItem item={item} i={i} />))
            }
        </SimpleGrid>
    )
}

const Activity = () => {
    return (
        <section id="activity">
            <VStack pt="100px" spacing={10} mx={{ sm: 0, md: 100 }}>
                <Heading size="lg">Activity</Heading>
                <ActivityList />
            </VStack>
        </section>
    )
}

export default Activity
