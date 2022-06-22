import "./App.css";
import Example01 from "./example-01/Example01";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePrincipal from "./HomePrincipal";
import Example02 from "./example-02/Example02";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomePrincipal />} path="/" />
          <Route element={<Example01 />} path="example-01" />
          <Route element={<Example02 />} path="example-02" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
