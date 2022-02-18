import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container px-3 mx-auto pb-12">content</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
