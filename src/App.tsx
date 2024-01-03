import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Modules/Layout";
import Home from "./Modules/home/home";
import Detalhes from "./Modules/DetalhesPokemon/Detalhes";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Detalhes/>} path={"detalhes/:id"}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
