import {Box, Heading, Stack, Input, Image, Button, Text, Flex, Spacer, Tag, SimpleGrid, Center, GridItem, Spinner } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreItem = ({title, price, image}) => {
return(
    <Box p = {4} borderRadius = 'lg' borderWidth='1px'>
       
        <Center>
        <Image src = {image}  w={24}></Image>   
        </Center>    
        <Flex gap={5} alignItems="center">
        <Heading mt={4} noOfLines={2} size = "sm" fontWeight={"normal"}>{title}</Heading>
        <Spacer></Spacer>
        <Tag>${price}.00</Tag>
        </Flex>
    </Box>
)
}
function Store({}) {
    const [storeItem, setStoreItem] = useState([]);

   const [filteredItems, setFilteredItems] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setLoading(false);
      setStoreItem(data);
      setFilteredItems(data)
    });
  }, []);
   


    return (
        <Box p = {4}>
               <Header title = "Fake Store"></Header>
            {loading ? <Center mt={6}><Spinner></Spinner></Center> : 
            <Box padding={2}>
            <Input onChange={e =>{
                let f = storeItem.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
                setFilteredItems(f);
            }} placeholder="Search" mt={2}></Input>
           
            <SimpleGrid  padding={2} mt={4} columns={4} spacing={4}>
            {filteredItems.map((item) => {
                return( 
                <GridItem>
                    <Link to={`/product/${item.id}`}>
                    <StoreItem {...item} />
                    </Link> 
                
                </GridItem> 
                );
            })}
            </SimpleGrid>
            </Box>
}
        </Box>
    );
}

export default Store;