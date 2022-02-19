import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container px-3 mx-auto pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
