import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";

import JsonData from "../data/data.json";


const Home = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);


    return (<>
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Gallery data={landingPageData.Events}/>
        <Contact data={landingPageData.Contact} />
      </>);
}


export default Home;