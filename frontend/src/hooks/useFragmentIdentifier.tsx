import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useFragmentIdentifier<T extends HTMLElement>(identifier: string, visibilityThreshold: number = 0.5) {
  const sectionRef = useRef<T>(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = sectionRef.current; 
        if (!element) return;

        const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry) => {
              if (entry.isIntersecting === true && entry.intersectionRatio >= visibilityThreshold)
              {  
                navigate(
                  {
                    pathname: location.pathname,
                    search: location.search,
                    hash: identifier,
                  },
                  { replace: true }
                );

                setIsVisible(true);
              }
            }),
            {
                threshold: visibilityThreshold,
            }
        );
  
        observer.observe(element);
        return () => { observer.disconnect(); };

    }, [identifier, navigate]);



  return { sectionRef, isVisible };
}