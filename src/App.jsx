import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import { SearchProvider } from './components/SearchContext';
import './App.css';



function App() {

  return (
    <div className='App'>
      <SearchProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:objectID' element={<DetailsPage />} />
        </Routes>
      </SearchProvider>
    </div>
  )
}

export default App
