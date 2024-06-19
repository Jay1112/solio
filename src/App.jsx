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
import useUserSession from './hooks/useUserSession';
import { useEffect } from 'react';

function App() {
  const app = useSelector((state) => state.app ) ;

  const { initAppSession, loading } = useUserSession();

  useEffect(()=>{
    initAppSession();
  },[]);

  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<ProductPage/>} />
          <Route path='/about/' element={<AboutPage/>} />
          <Route path='/contact/' element={<ContactPage/>} />
          { !loading && !app.isLoggedIn && <Route path='/sign-in/' element={<SignInPage/>} />}
          { !loading && !app.isLoggedIn && <Route path='/sign-up/' element={<SignUpPage/>} />}
          { !loading &&  app.isLoggedIn && <Route path='/dashboard/' element={<DashboardPage/>} />  }
          { !loading &&  app.isLoggedIn && <Route path='/dashboard/socials/' element={<SocialsPage/>} />}
          <Route path='/verify-otp/' element={<OtpVerificationPage/>} />
          { loading && <Route path='/loading/' element={<LoadingPage />} />}
          { !loading && <Route path='*' element={<PageNotFound />} />}
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
