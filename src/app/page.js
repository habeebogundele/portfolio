import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Resume from './components/Resume'
import MobileNavigation from './components/MobileNavigation'
import MobileSectionWrapper from './components/MobileSectionWrapper'

export default function Home() {
  return (
    <main>
      <Header />
      <MobileSectionWrapper section="home">
        <Hero />
      </MobileSectionWrapper>
      <MobileSectionWrapper section="about">
        <About />
      </MobileSectionWrapper>
      <MobileSectionWrapper section="skills">
        <Skills />
      </MobileSectionWrapper>
      <MobileSectionWrapper section="projects">
        <Projects />
      </MobileSectionWrapper>
      <MobileSectionWrapper section="resume">
        <Resume />
      </MobileSectionWrapper>
      <MobileSectionWrapper section="contact">
        <Contact />
      </MobileSectionWrapper>
      <Footer />
      <MobileNavigation />
    </main>
    // <main>
    //   <Header />
    //   <Hero />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Resume />
    //   <Contact />
    //   <Footer />
    // </main>
  )
}





// import Image from "next/image";

// export default function Home() {
//   return (
//     <div >

//     </div>
//   );
// }
