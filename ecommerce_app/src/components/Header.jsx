import { Box, Heading } from "@chakra-ui/react";

function Header (props) {
    return (
        
    <Box p = {4} shadow = "md">
        <div>Hello </div>
        <Heading>{props.title}</Heading>
    </Box>
    )
}

export default Header;