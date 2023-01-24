declare module "next-styled-nprogress" {
  export interface NProgressProps {
    height?: string;
    showSpinner?: boolean;
    delay?: number;
    color?: string;
    startPosition?: number;
    stopDelayMs?: number;
    height?: number;
    easing?: string;
    speed?: number;
  }

  class NProgress extends React.Component<NProgressProps> {}
  export default NProgress;
}
