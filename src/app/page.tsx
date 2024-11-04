import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "./(section)/AboutUs";
import Experience from "./(section)/Experience";
import Glimpse from "./(section)/Glimpse";
import Hero from "./(section)/Hero";
import Menu from "./(section)/Menu";
import PrivateAndGroupDining from "./(section)/PrivateAndGroupDining";
import Reviews from "./(section)/Review";
import Special from "./(section)/(special)/Special";
// import Special from "./(section)/Special";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <Navbar position="absolute" />
        <Hero />
        {/* <AboutUs /> */}
        <Menu />
        <Experience />
        {/* <Special /> */}
        <Special />
        <PrivateAndGroupDining />
        <Reviews />
        <Glimpse />
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
