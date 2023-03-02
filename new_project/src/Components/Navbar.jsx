import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Button, Heading } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box m='auto' textAlign={"center"}>
            <Heading> Theme Mode </Heading>
            <header>
                <Button mt={"20px"} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </header>
        </Box>
    )
}
