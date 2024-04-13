import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import UserPortfolioPage from "./pages/UserPortfolioPage/UserPortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/user/:id" element={<UserPortfolioPage />} />
    </Routes>
  );
}

export default App;
