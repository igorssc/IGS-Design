declare module "react-analytics" {
  import { ReactNode } from "react";

  interface AnalyticsProps {
    id: string;
    children: ReactNode;
    debug?: boolean;
    set?: boolean;
  }

  export class Analytics extends React.Component<AnalyticsProps> {}

  export function trackPageview(path?: string): void;

  export function trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number
  ): void;

  export function set(field: string, value: any): void;
}
