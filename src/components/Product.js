import React from 'react'
import { Flex, VStack, HStack, SimpleGrid, AspectRatio } from '@chakra-ui/layout'
import { Heading, Image, Text, Badge, Icon, Link } from '@chakra-ui/react'
import productList from '../assets/data/product.json'
import { AiFillHeart } from "react-icons/ai";

const ProductTag = ({ productId, tags }) => {

    const colorScheme = (tag) => {
        let color = "green"
        switch (tag) {
            case "node js": color = "green"; break;
            case "react": color = "purple"; break;
            case "website": color = "yellow"; break;
            case "flutter": color = "blue"; break;
            case "mobile app": color = "red"; break;
            default: color = "green"
        }

        return color
    }

    return (<HStack>
        {
            tags.map((tag, i) => (
                <Badge
                    key={`badge_${productId}_${i}`}
                    colorScheme={colorScheme(tag)}
                    variant="solid">
                    {tag}
                </Badge>
            ))
        }
    </HStack>)
}

const ProductScore = ({ score }) => {
    const listScore = Array(5).fill(false).map((item, i) => (i < score))
    return (
        <HStack>
            {listScore.map((item, i) => (<Icon as={AiFillHeart} color={item ? "red.500" : "gray.300"} key={i} />))}
            <Text>({score})</Text>
        </HStack>
    )
}

const ProductItem = ({ item }) => {
    return (
        <Flex direction="column">
            <Flex>
                <AspectRatio w="100%" maxH="240px" ratio={4 / 3} zIndex={-1}>
                    <Image src={item.image} objectFit="cover" />
                </AspectRatio>
            </Flex>
            <VStack mt={6}>
                <Heading>{item.name}</Heading>
                <Link>
                    <Text>{item.url}</Text>
                </Link>
                <Text>Released : {item.release}</Text>
                <Text noOfLines={3}>{item.detail}</Text>
                <ProductTag productId={item.id} tags={item.tag} />
                <ProductScore score={item.score} />
            </VStack>
        </Flex>
    )
}

const Product = () => {
    return (
        <section id="product">
            <VStack pt="100px">
                <Heading size="lg">Product</Heading>
                <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10} py={8} px={20}>
                    {
                        productList.map(item => (<ProductItem item={item} key={`item_${item.id}`} />))
                    }
                </SimpleGrid>
            </VStack>
        </section>
    )
}

export default Product
