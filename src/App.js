import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopSection from "./components/ShopSection";
import GallerySection from "./components/GallerySection";
import Shop from "./components/Shop";
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
                <ShopSection />
              </>
            }
          />
          <Route path="/shop-now" element={<Shop />} />
        </Routes>
        <footer className="my-4">
          <Footer />
        </footer>
      </main>
    </Router>
  );
}

export default App;
