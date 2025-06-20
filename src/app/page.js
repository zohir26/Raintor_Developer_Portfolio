
import {About} from "@/components/About";
import { Contact } from "@/components/Contact";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkProcess from "@/components/WorkProcess";


export default function Home() {
  return (
  <div>
    
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <WorkProcess></WorkProcess>
      <Contact></Contact>
      <Footer></Footer>
  </div>
  );
}
