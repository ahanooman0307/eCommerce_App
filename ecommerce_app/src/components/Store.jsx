import {Box, Heading, Stack, Input, Button, Text, Flex, Spacer, Tag, SimpleGrid } from "@chakra-ui/react"
import { useRef } from "react";
import Header from "./Header";


const StoreItem = ({title, price}) => {
return(
    <Box p = {4} borderRadius = 'lg' borderWidth='1px'>
        
        <Flex gap={5} alignItems="center">
        <Heading noOfLines={2} size = "sm" fontWeight={"normal"}>{title}</Heading>
        <Spacer></Spacer>
        <Tag>${price}.00</Tag>
        </Flex>
    </Box>
)
}
function Store({items, onItemAdd}) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();

    return (
        <Box p = {4}>
        
               <Header title = "Fake Store"></Header>
            <SimpleGrid columns={4} spacing={4}>
            {items.map((item) => {
                return <StoreItem title = {item.title} price = {item.price}/> })}
                </SimpleGrid>
                
        </Box>
    );
}

export default Store;