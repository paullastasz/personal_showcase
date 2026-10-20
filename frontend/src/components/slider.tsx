import { useEffect, useState } from 'react';

interface SliderProps {
  images: string[];
  alt: string;
}

function Slider({ images, alt }: SliderProps) {
  // @ts-ignore
  const [index, setIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        let temp: number = prev + 1;

        if (temp >= images.length)
          temp = 0; 

        return temp;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) return null;

  return (
        <img src={images[index]}   
             alt={alt} 
             loading="lazy"
             decoding="async"
             width="600"
             height="1200"
             className={`object-cover w-100 h-100 rounded-t-lg drop-shadow-2xl`}/>
  )
}

export default Slider