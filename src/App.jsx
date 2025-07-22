import React, { useState } from "react";
import Splash from "./pages/Splash";
import MainRoutes from "./routes/Mainroutes";
import 'remixicon/fonts/remixicon.css';
import Navbar from "./components/Navbar";


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="full">
          <Navbar />
          <MainRoutes />
        </div>
      )}
    </>
  );
};

export default App;