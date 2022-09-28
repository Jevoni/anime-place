import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'

import AnimeDetailsPage from './pages/AnimeDetailsPage';
import AnimeVideoPage from './pages/AnimeVideoPage';
import GenresPage from './pages/GenresPage';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div style={{ backgroundColor: '#fab96b' }}>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/animeDetails/:animeId' element={<AnimeDetailsPage />} />
        <Route exact path='/watch/:episodeId' element={<AnimeVideoPage />} />
        <Route exact path='/search/:search' element={<SearchPage />} />
        <Route exact path='/genre/:genre' element={<GenresPage />} />
      </Routes>
    </div>
  );
}

export default App;
