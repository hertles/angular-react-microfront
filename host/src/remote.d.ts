declare module "remote/RemoteLogo" {
  import { ComponentType } from "react";

  interface RemoteLogoProps {
    value: number;
    onCounterClick: () => void;
  }

  const RemoteLogo: ComponentType<RemoteLogoProps>;
  export default RemoteLogo;
}
