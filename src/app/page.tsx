import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import References from "@/components/sections/References";
import Books from "@/components/sections/Books";
import Youtube from "@/components/sections/Youtube";
import Channels from "@/components/sections/Channels";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <References />
        <Books />
        <Youtube />
        <Channels />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
