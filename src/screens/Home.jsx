import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";

import JsonData from "../data/data.json";


const Home = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);


    return (<>
        {/* <Navigation /> */}
        <Header data={landingPageData.Header} />
        {/* <Features data={landingPageData.Features} /> */}
        <About data={landingPageData.About} />
        {/* <Services data={landingPageData.Services} /> */}
        <Gallery data={landingPageData.Services}/>
        {/* <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
      </>);
}


export default Home;