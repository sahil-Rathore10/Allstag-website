import React, { useState } from "react";
import Splash from "./pages/Splash";
import MainRoutes from "./routes/Mainroutes";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <MainRoutes />
      )}
    </>
  );
};

export default App;