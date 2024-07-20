import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage/>} />
      <Route path="/sign-in/" element={<SignInPage/>} />
      <Route path="/sign-up/" element={<SignUpPage/>} />
    </Routes>
  )
}

export default App;