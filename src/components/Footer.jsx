import {Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"8"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                    >
                        CoinTrackr is a comprehensive website that serves as a one-stop destination for all your cryptocurrency tracking needs. Whether you're an avid investor, a curious enthusiast, or someone looking to stay updated on the latest trends in the crypto world, CoinTrackr has you covered. With real-time data, exchange rates, value conversions, and interactive graph charts, CoinTrackr empowers you with the information you need to make informed decisions and navigate the exciting world of cryptocurrencies.
                    </Text>
                </VStack>

                <VStack  w={"40"} alignItems={"center"}>
                    <Text>Connect</Text>
                    <Link to={"https://www.linkedin.com/in/chirag-gupta-0405111b9/"} target="blank"><AiFillLinkedin /></Link>
                    <Link to={"https://www.github.com/chirag4601"} target="blank"> <AiFillGithub /> </Link>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;
