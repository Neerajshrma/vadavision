import React from "react";
import Head from "next/head";
import HeroSection from "./HeroSection/HeroSection";
import OurServices from "./Our-services/OurServices";
import Tweekend from "../Portfolios/tweekend/Tweekend";
import StandardInsights from "../Portfolios/standardinsights/StandardInsights";
import Legalhub from "../Portfolios/legalhub/Legalhub";
import IndustriesWeWork from "./Industries/IndustriesWeWork";
import WhyChooseUs from "./Whychooseus/WhyChooseUs";
import ConsultWithUs from "./Consultwithus/ConsultWithUs";
import SubscribeUs from "./Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import FrequentlyAksedQuestions from "./FAQs/FrequentlyAksedQuestions";
import Sliders from "./Testimonials/Testimonials";
import Header from "../common/Header/Header";

const Homepage = () => {
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
        <Header />
      </div>
      {/* header end */}

      {/* hero-section start */}
      <div>
        <HeroSection />
      </div>
      {/* hero-section end */}

      {/* testimonials start */}
      <div>
        <Sliders />
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
        <Legalhub />
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

      {/* FAQs start */}
      <div>
        <FrequentlyAksedQuestions />
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
