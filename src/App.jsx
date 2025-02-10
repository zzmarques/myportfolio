import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Container from "./components/Container";
import Skills from "./components/Skills";

const App = () => {

  return (
    <>
      <Header/>
      <Container>
        <Introduction/>
        <AboutMe/>
        <Skills/>
      </Container>
    </>
  )
}

export default App
