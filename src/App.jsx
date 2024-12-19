import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import CardComponent from './components/mobile-cards';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Carousel />
        <CardComponent />
        <Footer />
      </div>
    </>
  )
}

export default App
