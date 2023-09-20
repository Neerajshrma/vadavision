import React from "react";
import PopularArticles from "./PopularArticles/PopularArticles";
import ConsultUs from "./ConsultUsPage/ConsultUs";
import Footer from "../common/Footer/Footer";
import WhyChooseUs from "./WhyChooseUsPage/WhyChooseUs";
import FAQs from "../landingpage/FAQs/FAQs";
import RecentArticles from "./RecentArticles/RecentArticles";
import Header from "../UIUXPage/Header/Header";
import CaseStudy from "./CaseStudyPage/CaseStudy";
import AllArticles from "./AllArticlesPage/AllArticles";

const BlogPage = () => {
  return (
    <>
      <div className="bg-[#141619]">
        <div>
        <Header />

        </div>
        <div>
        <PopularArticles />

        </div>
        <div>
            <RecentArticles/>
        </div>
        <div>
            <CaseStudy/>
        </div>
        <div>
            <AllArticles/>
        </div>
        <div>
        <ConsultUs/>

        </div>
        <div>
        <WhyChooseUs/>

        </div>
        <div >
        <FAQs/>


        </div>

        <div>
        <Footer/>

        </div>

      </div>
    </>
  );
};

export default BlogPage;
