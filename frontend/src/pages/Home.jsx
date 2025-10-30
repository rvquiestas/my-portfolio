import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("bg-bg");

    return () => {
      document.body.classList.remove("bg-bg");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
