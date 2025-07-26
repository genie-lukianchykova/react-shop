import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopSection from "./components/ShopSection";


function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
        <ShopSection />
      <footer className="my-4">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
