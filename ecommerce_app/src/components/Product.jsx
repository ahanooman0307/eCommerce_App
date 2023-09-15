import { Box, Heading } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";



const Header = ({title}) => <Box p = {2} shadow = 'md'>
    <Heading>{title}</Heading>
</Box>

function Product (props) {
    const [storeItem, setStoreItem] = useState([]);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
        
          setStoreItem(data);
        });
      }, []);

    const {id} = useParams();
 
    console.log(id)
    return <Box>
        <Header title = {storeItem.title}></Header>
    </Box>
}

export default Product;