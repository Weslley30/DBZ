import { Route, Routes, BrowserRouter,  } from "react-router-dom";
import { Carta } from "../Carta";
import Infor from "../InformacaoDetalhada";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Carta />} />
                <Route path="/:action" element={<Infor />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;