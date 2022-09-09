import { ReactNode, useEffect } from "react";
import "../../utils/particles/particles.js";
import { configParticles } from "../../utils/particles/particlesjs.config";
import styles from "./styles.module.scss";

interface BackgroundParticlesProps {
  children: ReactNode;
}

export const BackgroundParticles = ({ children }: BackgroundParticlesProps) => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore:next-line
      particlesJS.load("particles-js", configParticles, function () {});
    }, 100);
  }, []);

  return (
    <>
      <div id="particles-js" className={styles.container}>
        <canvas className="particles-js-canvas-el" height={0}></canvas>
        {children}
      </div>
    </>
  );
};
