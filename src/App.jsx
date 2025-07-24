import React, { useState } from "react";
import Splash from "./pages/Splash";
import MainRoutes from "./routes/Mainroutes";
import 'remixicon/fonts/remixicon.css';
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/ProductContext";
import Footer from "./components/Footer";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <CartProvider>
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="full">
          <Navbar />
          <MainRoutes />
          <Footer />
        </div>
      )}
    </CartProvider>
  );
};

export default App;