import React from "react";
import PathDisplay from "../components/PathDisplay.js"
import Cards from "../components/services/Cards.js";
import { useState } from "react";
import ComputingDisplay from "@/components/services/ComputingDisplay.js";
import DesktopMockup from "@/components/services/DesktopMockup.js";
import Header from "../components/Header.js";
import ComputingAttributes from "@/components/services/ComputingAttributes.js";
import Footer from "../components/Footer.js"
import GraphSection from "@/components/services/GraphSection.js";
import ComputingCTA from "@/components/services/ComputingCTA.js";
import StorageDisplay from "@/components/services/StorageDisplay.js";
import StorageMockup from "@/components/services/StorageMockup.js";
import StorageAttributes from "@/components/services/StorageAttributes.js";

function Services(){

  const [selectedStorage, setSelectedStorage] = useState(true)
  const [selectedComputing, setSelectedComputing] = useState(false)

  function changeSelected() {
    setSelectedStorage(!selectedStorage)
    setSelectedComputing(!selectedComputing)
  }

  const servicesTitle = "Services"

  const storageTitle = "Cloud storage"
  const computingTitle = "Cloud computing"

  const storageDescription = "Gain access to some of the most secure and fastest storage in the industry."
  const computingDescription = "Unlock the worlds best hardware and boost your development process."

  const storageIcon = "/images/database.png"
  const computingIcon = "/images/cloud.png"

  return(
    <>
    <div className="h-fit bg-dark">
      <Header />
      <PathDisplay title={servicesTitle}/>
      <div className="absolute top-[17%] right-[40%] h-[5%] w-[3%] z-10 float-right bg-light"></div>
      <div className="absolute top-[25%] left-[30%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
      <div className="absolute top-[20%] right-[10%] h-[3.5%] w-[2%] z-10 float-right bg-light"></div>
      <div className="flex justify-center">
      <Cards title={storageTitle} description={storageDescription} icon={storageIcon} id={1} selected={selectedStorage} changeSelected={changeSelected} />
      <Cards title={computingTitle} description={computingDescription} icon={computingIcon} id={2} selected={selectedComputing} changeSelected={changeSelected} />
      </div>
      {selectedStorage &&
      <>
      <StorageDisplay />
      <StorageMockup />
      <StorageAttributes />
      </>}
      {selectedComputing && 
      <>
      <ComputingDisplay />
      <DesktopMockup />
      <ComputingAttributes />
      <GraphSection />
      <ComputingCTA />
      </>
      }
      <Footer theme={"dark"}/>
    </div>
    </>
  )
}

export default Services;