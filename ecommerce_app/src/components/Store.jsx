import {Box, Heading, Stack, Input, Button, Text, Flex, Spacer, Tag } from "@chakra-ui/react"
import { useRef } from "react";


const StoreItem = ({title, price}) => {
return(
    <Box p = {4} borderRadius = 'lg' borderWidth='1px'>
        <Flex gap={5} alignItems="center">
        <Heading size = "md">{title}</Heading>
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
            <Stack>
            {items.map((item) => {
                return <StoreItem title = {item.title} price = {item.price}/> })}
                </Stack>
                <Input  ref = {itemNameRef} mt = {10} placeholder = "Item Name"></Input>
                <Input ref = {itemPriceRef} mt = {2} placeholder = "Price" type = "number"></Input>
                <Button mt = {2}
                     onClick={() =>{
                    onItemAdd({
                        title: itemNameRef.current.value,
                        price: itemPriceRef.current.value,
                    }); 
                }}>Add Item</Button>
        </Box>
    );
}

export default Store;