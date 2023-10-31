"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import HeroSection from "./HeroSection/HeroSection";
import OurServices from "./Our-services/OurServices";
import Tweekend from "../Portfolios/tweekend/Tweekend";
import StandardInsights from "../Portfolios/standardinsights/StandardInsights";
import IndustriesWeWork from "./Industries/IndustriesWeWork";
import ConsultWithUs from "./Consultwithus/ConsultWithUs";
import SubscribeUs from "./Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import Tabs from "../common/Faqs/Tabs/Tabs";
import SplideSlider from "../Splide/SplideSlider";
import Accordion from "./Faq";
import WhyChooseUs from "../common/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Otgc from "../Portfolios/Otgc/Otgc";
const Homepage = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Marck+Script:400"
          rel="stylesheet"
        />
      </Head>
      {/* header start */}
      <div>
        <Header color="black" backgroundColor="#141619" svgcolor="#333542" />
      </div>
      {/* header end */}

      {/* hero-section start */}
      <div>
        <HeroSection />
      </div>
      {/* hero-section end */}

      {/* testimonials start */}
      <div>
        <SplideSlider />
      </div>
      {/* testimonials end */}

      {/* our-services start */}
      <div>
        <OurServices />
      </div>
      {/* our-services end */}

      {/* portfolio-tweekend start */}
      <div>
        <Tweekend />
      </div>
      {/* portfolio-tweekend end* /}

        {/* portfolio-standard insights start */}
      <div>
        <StandardInsights />
      </div>
      {/* portfolio-standard insights end */}

      {/* portfolio legalhub start */}
      <div>
        <Otgc />
      </div>
      {/* portfolio legalhub end* /}

        {/* industries we work with start */}
      <div>
        <IndustriesWeWork />
      </div>
      {/* industries we work with end */}

      {/* why choose we start */}
      <div>
        <WhyChooseUs />
      </div>
      {/* why choose we end */}

      {/* consult with us start */}
      <div>
        <ConsultWithUs />
      </div>
      {/* consult with us end */}
<<<<<<< HEAD
      <div className="bg-[#141619] py-10 px-40 responsive-width min-h-[600px]">
        <div className="w-1/2" data-aos="fade-right">
=======
      <div className="bg-[#141619] py-10 px-40 responsive-width">
        <div className="w-1/2"data-aos="fade-up">
>>>>>>> 78f315fafa99bdf32fd717cb8cc9fd7f414cc4a7
          <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex gap-20 responsive-faqs">
          <div className="w-1/2 mt-8 faq-accordian">
            <Accordion />
          </div>
          <div className="w-1/2 faq-tabs">
            <Tabs />
          </div>
        </div>
      </div>
      {/* FAQs end */}

      {/* subscribe us start*/}
      <div>
        <SubscribeUs />
      </div>
      {/* subscribe us end */}

      {/* footer start */}
      <div>
        <Footer />
      </div>
      {/* footer end */}
    </div>
  );
};

export default Homepage;
