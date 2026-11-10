import { useEffect, useState } from "react";

type ResponsiveBackgroundProps = {
  image?: string;
  video: string;
  className?: string;
  breakpoint?: number;
};

function ResponsiveBackground({
  image,
  video,
  className = "",
  breakpoint = 640,
}: ResponsiveBackgroundProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${breakpoint}px)`
    );

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return (
    <>
      {isDesktop ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          preload="metadata"
          className={className} >
          <source src={`/videos/${video}`} type="video/mp4" />
        </video>
      ) : ( 
        image && (
          <img
            src={`/images/${image}`}
            alt=""
            aria-hidden="true"
            className={className} />
        )
      )}
    </>
  );
}

export default ResponsiveBackground;