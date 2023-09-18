import { Box, Heading, Image, Text, Button, Stack, HStack, Tag } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";




//Header
const Header = ({title}) => <Box p = {2} shadow = 'md'>
    <Heading>{title}</Heading>
</Box>

// function K (){
//   console.log(storeItem)
// }

function Product (props) {
    const [storeItem, setStoreItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);

 

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
        
          setStoreItem(data);
          console.log(data)
        });
      }, []);

    const {id} = useParams();

    const addToCart = () => {
        setCartItems((prevCartItems) => {
        const updatedCart = [...prevCartItems, storeItem.id];
    sessionStorage.setItem('cart', JSON.stringify(updatedCart)); //localStorage saves all the time while sessionStorage saves until browser closes
    return updatedCart;
      });
      console.log(cartItems)
    }

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      }, []);

    

 
    console.log(id)
    return <Box>
        <Header title = {storeItem.title}></Header>
        <Box p={8} display={'flex'} alignItems={'center'}>
        <Image  width={48} src = {storeItem.image}></Image>
        <Box ml={4}>
            <Stack spacing = {4}>
                <Box>
            <Heading>Price: ${storeItem.price}</Heading>
            <Tag>{storeItem.category}</Tag>
            </Box>
            <Text mt={3}> {storeItem.description}</Text>
            <HStack>
            <Button onClick={addToCart} w = "xs" size = "sm" colorScheme="blue" >Buy Now</Button>
            <Button w = "xs" size = "sm" >Share Product</Button>
            </HStack>

            </Stack>
        </Box>
        </Box>
    </Box>
}

export default Product;