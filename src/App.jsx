import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux'

function App() {
  const app = useSelector((state) => state.app ) ;
  console.log(app);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
