import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home({}) {
  return (
    <div>
     <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full"
      >
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
         <TechStack/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
      </main> 
    </div>
  );
}
