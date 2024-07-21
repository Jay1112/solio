import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashBoardPage from "./pages/DashBoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage/>} />
      <Route path="/dashboard/" element={<DashBoardPage/>} />
      <Route path="/sign-in/" element={<SignInPage/>} />
      <Route path="/sign-up/" element={<SignUpPage/>} />
    </Routes>
  )
}

export default App;