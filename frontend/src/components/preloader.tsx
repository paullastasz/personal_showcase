import { useEffect, useState } from "react";


import "../assets/css/preloader.css";
import i18n from "../translation";

type PreloaderProps = {
  onComplete: () => void;
};

function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
    useEffect(() => {
    let frame = 0;
    let animationId = 0;

    let pageReady = document.readyState === "complete";
    let fontsReady = false;
    let videosReady = false;
    let translationsReady = i18n.isInitialized;
    let startTime = 0;

    const finishLoading = () => {
      pageReady = true;
    };

    const handleTranslationsReady = () => {
      translationsReady = true;
    };

    if (!pageReady) {
      window.addEventListener("load", finishLoading, {
        once: true,
      });
    }

    if (!translationsReady) {
      i18n.on("initialized", handleTranslationsReady);
    }

    document.fonts.ready.then(() => {
      fontsReady = true;
    });

    const videos = Array.from(
      document.querySelectorAll("video")
    );

    Promise.all(
      videos.map(
        (video) =>
          new Promise<void>((resolve) => {
            if (video.readyState >= 2) {
              resolve();
              return;
            }

            const cleanup = () => {
              video.removeEventListener(
                "loadeddata",
                handleReady
              );
              video.removeEventListener("error", handleError);
              video.removeEventListener("abort", handleError);
            };

            const handleReady = () => {
              cleanup();
              resolve();
            };

            const handleError = () => {
              cleanup();
              resolve();
            };

            video.addEventListener("loadeddata", handleReady, {
              once: true,
            });
            video.addEventListener("error", handleError, {
              once: true,
            });
            video.addEventListener("abort", handleError, {
              once: true,
            });

            if (video.readyState >= 2) {
              handleReady();
            }
          })
      )
    ).then(() => {
      videosReady = true;
    });

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;

      const allReady =
        pageReady &&
        fontsReady &&
        videosReady &&
        translationsReady;

      const target = allReady ? 100 : 95;

      const next = Math.min(
        target,
        Math.floor((elapsed / 1800) * 95)
      );

      setProgress((previous) => Math.max(previous, next));

      if (allReady && next >= 95) {
        setProgress(100);
        frame = window.setTimeout(onComplete, 350);
        return;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("load", finishLoading);
      i18n.off("initialized", handleTranslationsReady);

      cancelAnimationFrame(animationId);
      window.clearTimeout(frame);
    };
  }, [onComplete]);
  
  return (
    <div className="preloader">
      <div className="preloader-circle"
            role="progressbar"
            aria-label={i18n.isInitialized ? i18n.t("loading") : "Loading page"}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            style={{ "--progress": `${progress * 3.6}deg` } as React.CSSProperties}>

        <span>{progress}%</span>
      </div>
    </div>
  );
}

export default Preloader;