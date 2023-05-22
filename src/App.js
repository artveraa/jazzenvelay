import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Presentation from "./pages/Presentation/index";
import Accueil from "./pages/Accueil/index";
import Medias from "./pages/Medias/index";
import Actualites from "./pages/Actualites/index";
import Single from "./pages/Single/index";
import Contact from "./pages/Contact/index";
import Festival from "./pages/Festival/index";
import Error from "./pages/Error/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Accueil/>}/>
                <Route path={"/presentation"} element={<Presentation/>}/>
                <Route path={"/medias"} element={<Medias/>}/>
                <Route path={"/actualites"} element={<Actualites/>}/>
                <Route path={"/actualites/:slug"} element={<Single/>}/>
                <Route path={"/festival"} element={<Festival/>}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
