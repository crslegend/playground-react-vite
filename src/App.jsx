import "src/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "modules/HomePage/index";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
    </Routes>
  );
};

export default App;
