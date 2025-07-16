import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
     <Header/>
     <main className='x'>
      <About/>
      <Projects/>
      <Contact />
      <Footer/>
     </main>
    </>
  )
}

export default App
