import ParticlesTs from "./components/ParticlesTs";
import useAOSObserver from "./hooks/useAOSObserver";
import AppRoutes from "./routes";

const App = () => {
  useAOSObserver();

  return (
    <>
      <ParticlesTs/>
      <AppRoutes/>
    </>
  )
}

export default App
