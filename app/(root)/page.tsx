import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Top10Movies from "@/components/Top10Movies/Top10Movies";
import AllDonghuasGrid from "@/components/List/List";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Top10Movies />
      <AllDonghuasGrid />
      <Footer />
    </div>
  );
};

export default page;
