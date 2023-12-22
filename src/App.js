import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Mainbar />
      </main>
        <Footer />
    </div>
  );
}

export default App;
