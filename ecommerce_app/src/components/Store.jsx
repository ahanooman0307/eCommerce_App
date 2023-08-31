import {Box, Heading} from "@chakra-ui/react"


const StoreItem = ({title}) => {
return(
    <Box p = {4}>
        <Heading size = "md">{title}</Heading>
    </Box>
)
}
function Store({items}) {
    return (
        <Box>
            {items.map((item) => {
                return(
                    <Box>
                        <Heading>{item}</Heading>
                        </Box>
                )
            })}
        </Box>
    );
}

export default Store;