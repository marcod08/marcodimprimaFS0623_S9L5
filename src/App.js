import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';
import Movies from './components/Movies';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Mainbar />
        <Movies titolo="Harry Potter" ricerca="harry%20potter" />
        <Movies titolo="Star Wars" ricerca="star%20wars" />
        <Movies titolo="Matrix" ricerca="matrix" />
      </main>
        <Footer />
    </div>
  );
}

export default App;
