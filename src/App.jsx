import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import SocialsPage from './pages/SocialsPage';
import PageNotFound from './pages/PageNotFound';
import LoadingPage from './pages/LoadingPage';
import OtpVerificationPage from './pages/OtpVerificationPage';

function App() {
  const app = useSelector((state) => state.app ) ;

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductPage/>} />
          <Route path='/about/' element={<AboutPage/>} />
          <Route path='/contact/' element={<ContactPage/>} />
          <Route path='/sign-in/' element={<SignInPage/>} />
          <Route path='/sign-up/' element={<SignUpPage/>} />
          <Route path='/dashboard/' element={<DashboardPage/>} />  
          <Route path='/dashboard/socials/' element={<SocialsPage/>} />
          <Route path='/verify-otp/' element={<OtpVerificationPage/>} />
          <Route path='/loading/' element={<LoadingPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
