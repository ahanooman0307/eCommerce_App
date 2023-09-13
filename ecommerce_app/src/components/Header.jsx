import { Box, Heading } from "@chakra-ui/react";

function Header (props) {
    return (
        
    <Box p = {4} shadow = "md">
        <div></div>
        <Heading>{props.title}</Heading>
    </Box>
    )
}

export default Header;