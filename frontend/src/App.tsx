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

      {/* SVG sharpening filter */}
      <svg className="absolute h-0 w-0"
           aria-hidden="true"
           focusable="false">
          <filter id="sharpen">
              <feConvolveMatrix order="3"
                                kernelMatrix="
                      0 -1 0
                      -1 5 -1
                      0 -1 0 
              " />
          </filter>
      </svg>


      <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/:lang" element={<LanguagePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
