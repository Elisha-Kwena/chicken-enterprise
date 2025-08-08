import React from "react";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Products from "../../components/sections/Products";
import Feature from "../../components/sections/Features";
import Feedback from "../../components/sections/Feedback";
import Gallery from "../../components/sections/Gallery";
import Metrics from "../../components/sections/Metrics";
import FinalCta from "../../components/sections/FinalCta";
import Footer from "../../components/sections/Footer";
const HomePage:React.FC = () => {
    return(
        <>
        <main className="w-full h-full pt-[60px] lg:pt-[65px] flex flex-col lg:gap-20">
        <section className="hero w-full h-[320px] lg:h-[calc(100vh-65px)] ">
                <Hero/>
            </section>
            <section className="about lg:h-[calc(100vh-65px)] py-8">
                <About/>
            </section>
            <section className="products lg:h-[calc(100vh-65px)] relative">
                <Products/>
            </section>
            <section className="features lg:min-h-[calc(100vh-65px)] lg:mt-0 mt-20">
                <Feature/>
            </section>
            <section className="feedback lg:mt-0 mt-20 h-auto">
                <Feedback/>
            </section>
            <section className="gallery ">
                <Gallery/>
            </section>
            <section className="metrics flex flex-col gap-6">
                <Metrics/>
            </section>
            <section>
                <FinalCta/>
            </section>
        </main>
        <Footer/>
        </>
    )
}
export default HomePage;