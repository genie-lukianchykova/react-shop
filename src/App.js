import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopSection from "./components/ShopSection";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
        <GallerySection />
      <footer className="my-4">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
