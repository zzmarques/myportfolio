import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <Introduction/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contact/>
            </Container>
        </>
    );
}

export default Home;