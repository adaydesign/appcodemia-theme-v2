import { Flex, Stack, Heading, Button, Spacer, Icon, IconButton, useBoolean, Divider, useBreakpointValue } from "@chakra-ui/react"
import { AiOutlineRobot, AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HashLink } from 'react-router-hash-link'


const Menu = ({ direction, closeMenu }) => {
    const btnWidth = useBreakpointValue({ sm: "full", md: "inherite" })


    return (
        <Stack direction={direction || "row"} spacing={3}>
            <HashLink smooth to={'/#top'} >
                <Button variant="ghost" leftIcon={<AiOutlineHome />} w={btnWidth} onClick={closeMenu}>Home</Button>
            </HashLink>
            <HashLink smooth to={'/#profile'}  >
                <Button variant="ghost" w={btnWidth} onClick={closeMenu}>Profile</Button>
            </HashLink>
            <HashLink smooth to={'/#skill'}  >
                <Button variant="ghost" w={btnWidth} onClick={closeMenu}>Skill</Button>
            </HashLink>
            <HashLink smooth to={'/#product'}  >
                <Button variant="ghost" w={btnWidth} onClick={closeMenu}>Product</Button>
            </HashLink>
            <HashLink smooth to={'/#activity'}  >
                <Button variant="ghost" w={btnWidth} onClick={closeMenu}>Activity</Button>
            </HashLink>
            <HashLink smooth to={'/#contact'}  >
                <Button variant="ghost" w={btnWidth} onClick={closeMenu}>Contact</Button>
            </HashLink>
        </Stack>
    )
}

const HeaderNormal = () => {
    return (
        <Flex display={{ sm: "none", md: "flex" }} w="full">
            <Logo />
            <Spacer />
            <Menu />
        </Flex>
    )
}
const HeaderSM = () => {
    const [toggle, setToggle] = useBoolean()
    return (
        <Flex display={{ sm: "flex", md: "none" }} direction="column" w="full">
            <Flex>
                <Logo />
                <Spacer />
                <IconButton variant="ghost" icon={toggle ? <AiOutlineClose /> : <AiOutlineMenu />} onClick={setToggle.toggle} />
            </Flex>
            {toggle && <Flex direction="column" w="full">
                <Divider my={5} />
                <Menu direction="column" closeMenu={setToggle.off} />
            </Flex>}
        </Flex>
    )
}
const Logo = () => {
    return (
        <Heading size="lg" color={{ sm: "red.700", md: "blue.700" }}>
            <Icon as={AiOutlineRobot} /> MyApp
        </Heading>
    )
}

const Header = () => {
    return (
        <Flex shadow="lg" p={4} position="fixed" left="0" top="0" w="full" bgColor="white" zIndex={1}>
            <HeaderNormal />
            <HeaderSM />
        </Flex>
    )
}

export default Header
