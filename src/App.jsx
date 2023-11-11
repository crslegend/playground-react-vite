import "@/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "@modules/HomePage/index";
import ReactHookForm from "@modules/ReactHookForm/index";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/rhf"} element={<ReactHookForm />} />
    </Routes>
  );
};

export default App;
