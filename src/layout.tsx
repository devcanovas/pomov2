import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Decorations from "./components/Decorations";
import Building from "./pages/Building";
import Home from "./pages/Home";
import SettingsPage from "./pages/Settings";
import { Constants } from "./utils/constants";

export default function LayoutRouter() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <Decorations />
        <Routes>
          <Route path={Constants.PATH_TO_HOME} element={<Home />} />
          <Route path={Constants.SETTINGS_PATH} element={<SettingsPage />} />
          <Route path={Constants.PROFILE_PATH} element={<Building />} />
        </Routes>
      </PrimeReactProvider>
    </BrowserRouter>
  );
}
