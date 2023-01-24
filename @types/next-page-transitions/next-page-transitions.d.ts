declare module "next-page-transitions" {
  import { ComponentType, ReactNode } from "react";

  export interface PageTransitionProps {
    timeout?: number;
    classNames?: string;
    loadingDelay?: number;
    loadingTimeout?: number;
    loadingClassNames?: string;
    loadingComponent?: ReactNode;
    loadingCallbackName?: string;
    monkeyPatchScrolling?: boolean;
    children?: ReactNode;
  }

  export const PageTransition: ComponentType<PageTransitionProps>;
}
