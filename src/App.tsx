import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Index from './components/Index';
import Movies from './components/Movies';
import Series from './components/Series';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/movies/page/1" element={<Movies />} />
        <Route path="/movies/page/:pageNumber" element={<Movies />} />
        <Route path="/series/page/1" element={<Series />} />
        <Route path="/series/page/:pageNumber" element={<Series />} />
      </Routes>
    </Router>

  )
}

export default App
