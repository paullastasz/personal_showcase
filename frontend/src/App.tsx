import './App.css';

import { Routes, Route, Navigate } from "react-router-dom"
import { useCallback, useState } from 'react';

import HomePage from './pages/homePage'
import Preloader from "./components/preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={finishLoading} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
