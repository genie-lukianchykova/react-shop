import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowSection from "./components/ShowSection";
import GallerySection from "./components/GallerySection";
import ShopSection from "./components/ShopSection";
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
          <Route path="/shop-now" element={<ShopSection />} />
        </Routes>
        <footer className="my-4">
          <Footer />
        </footer>
      </main>
    </Router>
  );
}

export default App;
