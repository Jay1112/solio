import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ProductPage from './pages/ProductPage';

function App() {
  const app = useSelector((state) => state.app ) ;
  console.log(app);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
