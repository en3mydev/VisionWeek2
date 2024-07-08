import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import New from "./pages/New";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/cats/new" element={<New />} />
      <Route path="/cats/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
