import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./modules/Layout/layout";
import Home from "./modules/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
