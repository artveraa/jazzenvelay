import './App.scss';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Presentation from "./pages/Presentation/index";
import Accueil from "./pages/Accueil/index";
import Medias from "./pages/Medias/index";
import Actualites from "./pages/Actualites/index";
import Single from "./pages/Single/index";
import Contact from "./pages/Contact/index";
import Festival from "./pages/Festival/index";
import Error from "./pages/Error/index";
import Loader from "./components/Loader/index";
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);

    }, []);


    return (
        <>
            {loading ?
                <Loader/>
                :
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path={"/"} element={<Accueil/>}/>
                        <Route path={"/presentation"} element={<Presentation/>}/>
                        <Route path={"/medias"} element={<Medias/>}/>
                        <Route path={"/actualites"} element={<Actualites/>}/>
                        <Route path={"/actualites/:slug"} element={<Single/>}/>
                        <Route path={"/festival"} element={<Festival/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"*"} element={<Error/>}/>
                    </Routes>
                </AnimatePresence>
            }
        </>
    );
}

export default App;
