import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Education from './components/Education';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Coding from './components/Coding.jsx';
import Achieve from './components/Achieve.jsx';
import Footer from './components/Footer.jsx';

// --- SCROLL ANIMATION WRAPPER ---
const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// --- LOADING SCREEN COMPONENT ---
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="animate-pulse font-mono text-xl">Loading...</p>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // 1. Handle Loading Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // 2. Handle External Links (Only runs after loading is false)
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(link => {
          try {
            const href = link.getAttribute('href') || '';
            if (href.startsWith('http')) {
              link.setAttribute('target', '_blank');
              link.setAttribute('rel', 'noopener noreferrer');
            }
          } catch (e) {
            // ignore
          }
        });
      }, 100);
    }
  }, [loading]);

  // 3. Show Loading Screen
  if (loading) {
    return <LoadingScreen />;
  }

  // 4. Show Main App
  return (
    <>
      <div className="bg-hero min-h-screen">
        <div className="app-container mx-auto">
          <Navbar />
          <main className="pt-16">
            <FadeIn>
              <Home />
            </FadeIn>
            
            <FadeIn>
              <Education />
            </FadeIn>
            
            <FadeIn>
              <Tech />
            </FadeIn>
            
            <FadeIn>
              <Projects />
            </FadeIn>
            
            <FadeIn>
              <Coding />
            </FadeIn>
            
            <FadeIn>
              <Achieve />
            </FadeIn>
            
            <FadeIn>
              <Footer />
            </FadeIn>
          </main>
        </div>
      </div>
    </>
  );
}

// --- TEMPORARY MOCKS (DELETE THESE IN YOUR PROJECT) ---
// These allow the code to run in this preview without your actual files.
// const Navbar = () => <nav className="p-4 bg-gray-800 text-white fixed w-full top-0 z-40">Navbar Placeholder</nav>;
// const Home = () => <div className="h-[80vh] bg-gray-100 flex items-center justify-center border-b">Home Section</div>;
// const Education = () => <div className="h-[80vh] bg-white flex items-center justify-center border-b">Education Section</div>;
// const Tech = () => <div className="h-[80vh] bg-gray-100 flex items-center justify-center border-b">Tech Section</div>;
// const Projects = () => <div className="h-[80vh] bg-white flex items-center justify-center border-b">Projects Section</div>;
// const Coding = () => <div className="h-[80vh] bg-gray-100 flex items-center justify-center border-b">Coding Section</div>;
// const Achieve = () => <div className="h-[80vh] bg-white flex items-center justify-center border-b">Achieve Section</div>;
// // const Footer = () => <div className="p-10 bg-black text-white text-center">Footer Section</div>;

export default App;