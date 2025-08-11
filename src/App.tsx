import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Head from './components/Head';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Head />
      <Header />
      <Hero />
      <About />
      {/* <JoinCommunity /> */}
      <Gallery />
      {/* <Reports /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default App;