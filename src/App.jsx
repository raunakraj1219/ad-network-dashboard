import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { PATH_NAMES } from "./constants/common-constants";
import Homepage from "./pages/homepage";
import ClicksGraph from "./pages/clicks";
import ImpressionsGraph from "./pages/impressions";
import CtrGraph from "./pages/ctr";
import CountryImpressionsGraph from "./pages/country-impressions";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={PATH_NAMES.HOME} element={<Homepage />} />
                <Route path={PATH_NAMES.CLICKS} element={<ClicksGraph />} />
                <Route
                    path={PATH_NAMES.IMPRESSIONS}
                    element={<ImpressionsGraph />}
                />
                <Route path={PATH_NAMES.CTR} element={<CtrGraph />} />
                <Route
                    path={PATH_NAMES.COUNTRY_IMPRESSIONS}
                    element={<CountryImpressionsGraph />}
                />
            </Routes>
        </Router>
    );
}

export default App;
