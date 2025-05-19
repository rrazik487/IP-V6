import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
