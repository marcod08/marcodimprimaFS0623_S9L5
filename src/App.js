import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Mainbar />
      </main>
    </div>
  );
}

export default App;
