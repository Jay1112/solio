import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage/>} />
      <Route path="/sign-in/" element={<SignInPage/>} />
    </Routes>
  )
}

export default App;