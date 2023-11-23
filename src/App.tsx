import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Modules/Layout";
import Home from "./Modules/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path={"/"} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
