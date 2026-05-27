import { useEffect, useState } from 'react';

function Slider(props: { images: string[] }) {
  // @ts-ignore
  const [index, setIndex] = useState(1);
  const [image, setImage] = useState(props.images[0]);

   useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        setImage(props.images[prev]);
        let temp: number = prev + 1;

        if (temp >= props.images.length)
          temp = 0; 

        return temp;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
        <img src={image}   
             alt="slider"  
             className={`object-cover w-100 h-100 rounded-t-lg drop-shadow-2xl`}></img>
  )
}

export default Slider