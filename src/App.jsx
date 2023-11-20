import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import './App.css';



function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:objectID' element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
