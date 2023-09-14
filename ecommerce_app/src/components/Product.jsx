import { Box } from "@chakra-ui/react";

function Product (props) {
    console.log(props.match.params.id)
    return <Box>Product Page</Box>
}

export default Product;