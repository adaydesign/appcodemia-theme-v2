import { Flex } from "@chakra-ui/layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import About from "../components/About"
import Product from "../components/Product"
import Activity from "../components/Activity"
import Skill from "../components/Skill"
import Contact from "../components/Contact"

const Home = () => {
    return (
        <Flex direction="column" id="home">
            <Header />
            <Hero />
            <About />
            <Skill />
            <Product />
            <Activity />
            <Contact />
            <Footer />
        </Flex>
    )
}


export default Home
