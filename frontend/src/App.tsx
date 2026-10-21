import './App.css';

import { Routes, Route, Navigate } from "react-router-dom"
import { useCallback, useState } from 'react';
import Preloader from "./components/preloader";
import LanguagePage from './pages/languagePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
    document.documentElement.classList.add("app-loaded");
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={finishLoading} />}

      <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/:lang" element={<LanguagePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
