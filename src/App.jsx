import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/project';

function App() {
  return (
    <>
      <div
        className={
          styles.App
        } /*instead of using string we are using a variable app */
      >
        <Navbar />
        <Hero />
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        </div>
    </>
  );
}

export default App;
