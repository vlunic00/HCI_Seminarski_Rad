import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/landing/Hero.js";
import CTA from "@/components/landing/CTA.js";
import Why from "@/components/landing/Why.js";
import ServiceList from "@/components/landing/ServiceList.js";
import Testimonials from "@/components/landing/Testimonials.js";

function Homepage(){
  return(
    <>
    <div className="h-screen bg-light">
      <Header />
      <Hero />
      <CTA />
      <Why />
      <ServiceList />
      <Testimonials />
    </div>
    </>
  )
}

export default Homepage;