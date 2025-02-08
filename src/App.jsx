import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Container from "./components/Container";

const App = () => {

  return (
    <>
      <Header/>
      <Container>
        <Introduction/>
        <AboutMe/>
      </Container>
    </>
  )
}

export default App
