import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowSection from "./components/ShowSection";
import GallerySection from "./components/GallerySection";
import ShopPage from "./pages/ShopPage";
import CollectionPage from './pages/CollectionPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <header>
          <Header />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GallerySection />
                <ShowSection />
              </>
            }
          />
          <Route path="/shop-now" element={<ShopPage />} />
          <Route path="/collection/:name" element={<CollectionPage />} />
        </Routes>
        <footer className="my-4">
          <Footer />
        </footer>
      </main>
    </Router>
  );
}

export default App;
