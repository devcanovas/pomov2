import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle";
import Home from "./pages/Home";
import { Constants } from "./utils/constants";
import Decorations from "./components/Decorations";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Decorations />
      <GlobalStyles />
      <Routes>
        <Route path={Constants.PATH_TO_HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
