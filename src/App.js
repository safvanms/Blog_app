import EmptyPage from './Components/EmptyPage/EmptyPage.jsx';
import MainPage from './Layout/MainPage/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />}/>
          <Route path="/:page" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
