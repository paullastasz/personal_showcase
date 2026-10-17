import { useEffect, useState } from 'react';

interface SliderProps {
  images: string[];
  alt: string;
}

function Slider({ images, alt }: SliderProps) {
  // @ts-ignore
  const [index, setIndex] = useState(1);
  const [image, setImage] = useState(images[0]);

   useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        setImage(images[prev]);
        let temp: number = prev + 1;

        if (temp >= images.length)
          temp = 0; 

        return temp;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
        <img src={image}   
             alt={alt} 
             loading="lazy"
             className={`object-cover w-100 h-100 rounded-t-lg drop-shadow-2xl`}></img>
  )
}

export default Slider