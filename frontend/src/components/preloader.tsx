import { useEffect, useState } from "react";


import "../assets/css/preloader.css";
import i18n from "../translation";

type PreloaderProps = {
  onComplete: () => void;
};

const VIDEO_TIMEOUT = 6000;
const MAX_WAIT = 10000;
 
function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
 
  useEffect(() => {
    let finishTimeout = 0;
    let idleHandle = 0;
    let idleIsCallback = false;
    let animationId = 0;
    let cancelled = false;
 
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
      window.addEventListener("load", finishLoading, { once: true });
    }
 
    if (!translationsReady) {
      i18n.on("initialized", handleTranslationsReady);
    }
 
    document.fonts.ready.then(() => {
      fontsReady = true;
    });
 
    const videoCleanups: Array<() => void> = [];
 
    const waitForVideo = (video: HTMLVideoElement) =>
      new Promise<void>((resolve) => {
        if (video.readyState >= 4) {
          resolve();
          return;
        }
 
        const done = () => {
          window.clearTimeout(timer);
          video.removeEventListener("canplaythrough", done);
          video.removeEventListener("error", done);
          video.removeEventListener("abort", done);
          resolve();
        };
 
        const timer = window.setTimeout(done, VIDEO_TIMEOUT);
 
        video.addEventListener("canplaythrough", done);
        video.addEventListener("error", done);
        video.addEventListener("abort", done);
 
        videoCleanups.push(done);
      });
 
    const videos = Array.from(document.querySelectorAll("video"));
 
    Promise.all(videos.map(waitForVideo)).then(() => {
      videosReady = true;
    });
 
    const whenIdle = (callback: () => void) => {
      if (typeof window.requestIdleCallback === "function") {
        idleIsCallback = true;
        idleHandle = window.requestIdleCallback(callback, { timeout: 1500 });
      } else {
        idleIsCallback = false;
        idleHandle = window.setTimeout(callback, 400);
      }
    };
 
    const animate = (timestamp: number) => {
      if (cancelled) return;
      if (!startTime) startTime = timestamp;
 
      const elapsed = timestamp - startTime;
 
      const allReady =
        (pageReady && fontsReady && videosReady && translationsReady) ||
        elapsed >= MAX_WAIT;
 
      const target = allReady ? 100 : 95;
 
      const next = Math.min(target, Math.floor((elapsed / 1800) * 95));
 
      setProgress((previous) => Math.max(previous, next));
 
      if (allReady && next >= 95) {
        setProgress(100);
        finishTimeout = window.setTimeout(() => whenIdle(onComplete), 350);
        return;
      }
 
      animationId = requestAnimationFrame(animate);
    };
 
    animationId = requestAnimationFrame(animate);
 
    return () => {
      cancelled = true;
 
      window.removeEventListener("load", finishLoading);
      i18n.off("initialized", handleTranslationsReady);
 
      videoCleanups.forEach((cleanup) => cleanup());
 
      cancelAnimationFrame(animationId);
      window.clearTimeout(finishTimeout);
 
      if (idleHandle) {
        if (idleIsCallback) {
          window.cancelIdleCallback(idleHandle);
        } else {
          window.clearTimeout(idleHandle);
        }
      }
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