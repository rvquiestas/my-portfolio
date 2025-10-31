import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("bg-bg");

    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageTransition key="home-content">
        <Navbar />
        <Hero />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Home;