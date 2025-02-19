import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/project" element={<ProjectDetail/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;