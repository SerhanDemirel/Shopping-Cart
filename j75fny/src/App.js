import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { DetailPage } from "./page/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
