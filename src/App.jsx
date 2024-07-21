import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashBoardPage from "./pages/DashBoardPage";
import useSession from './hooks/useSession';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { initAppSession, loading } = useSession();
  const auth = useSelector((state) => state.auth);

  useEffect(()=>{
    initAppSession();
  },[]);

  return (
    <Routes>
      <Route path="/" element={<ProductPage/>} />
      { !loading &&  auth.isLoggedIn && <Route path="/dashboard/" element={<DashBoardPage/>} />}
      { !loading && !auth.isLoggedIn && <Route path="/sign-in/" element={<SignInPage/>} /> }
      { !loading && !auth.isLoggedIn && <Route path="/sign-up/" element={<SignUpPage/>} /> }
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default App;