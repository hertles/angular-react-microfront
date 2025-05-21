declare module "remote/RemoteLogo" {
  import { ComponentType } from "react";

  interface RemoteLogoProps {
    count: number;
    onCounterClick: () => void;
  }

  const RemoteLogo: ComponentType<RemoteLogoProps>;
  export default RemoteLogo;
}

declare module "remoteAngular/remote-angular-logo" {
  import { ComponentType } from "react";

  export interface RemoteAngularLogoProps {
    count: number;
    onCounterClick: () => void;
  }

  const RemoteAngularLogo: ComponentType<RemoteAngularLogoProps>;
  export default RemoteAngularLogo;
}

declare namespace JSX {
  interface IntrinsicElements {
    "remote-angular-logo": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      count?: number;
      onCounterClick?: (event: CustomEvent) => void;
    };
  }
}
