import About from "@/component/About";
import Contact from "@/component/Contact";
import Experience from "@/component/Exprience";
import Footer from "@/component/Footer";
import Projects from "@/component/Projects";
import Services from "@/component/Services";
import Sidebar from "@/component/Sidebar";
import Skills from "@/component/Skills";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip min-h-screen bg-midnight">
      {/* Background glow */}
      <div className="pointer-events-none fixed -top-40 -right-40 -z-10 h-120 w-120 rounded-full bg-electric/15 blur-3xl" />

      <div className="mx-auto max-w-7xl lg:flex lg:items-start lg:gap-16 lg:px-10">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content */}
        <main className="mt-10 min-w-0 flex-1 px-5 pb-28 lg:mt-0 lg:px-0 lg:pb-16">
          <About />
          <Experience />
          <Projects />
          <Services />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
