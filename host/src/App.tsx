import { useState } from "react";
import RemoteLogo from "remote/RemoteLogo";
import "./App.css";
import AngularComponentWrapper from "./components/AngularComponentWrapper/AngularComponentWrapper.tsx";
import { type RemoteAngularLogoProps } from "remoteAngular/remote-angular-logo";

const loadRemoteAngularLogo = async () => {
  await import("remoteAngular/remote-angular-logo");
};

function App() {
  const [reactCount, setReactCount] = useState(0);
  const [angularCount, setAngularCount] = useState(0);

  return (
    <main className="main">
      <h1>Голосование за лучший фреймворк</h1>
      <section className="frameworks">
        <RemoteLogo
          count={reactCount}
          onCounterClick={() => setReactCount((prevCount) => (prevCount += 1))}
        />
        <AngularComponentWrapper<RemoteAngularLogoProps>
          elementName="remote-angular-logo"
          loadRemote={loadRemoteAngularLogo}
          inputs={{ count: angularCount }}
          outputs={{
            onCounterClick: () => {
              setAngularCount((prevCount) => (prevCount += 1));
            },
          }}
        />
      </section>
    </main>
  );
}

export default App;
