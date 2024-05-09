import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';

function App() {
  const app = useSelector((state) => state.app ) ;
  console.log(app);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductPage/>} />
          <Route path='/about/' element={<AboutPage/>} />
          <Route path='/contact/' element={<ContactPage/>} />
          <Route path='/sign-in/' element={<SignInPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
