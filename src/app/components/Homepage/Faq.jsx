"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const questionsData = [
  {
    id: 1,
    questions: "What services does Vadavision Offer?",
    answer:
      "Vadavision offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.",
  },
  {
    id: 2,
    questions:
      "How does Vadavision create website content without knowing our Business plan?",
    answer:
      "Vadavision offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.",
  },
  {
    id: 3,
    questions: "What often will results be reported?",
    answer:
      "Vadavision offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.",
  },
  {
    id: 4,
    questions:
      "How do I enlist the expertise of a specialized developer from Vadavision?",
    answer:
      "Hiring a specialized developer from Vadavision is easy. Just tell us what you need, check our website for professionals, and interview them. Our friendly support team will help you throughout the process.",
  },
  {
    id: 5,
    questions:
      "Is Vadavision suitable for startups? How can my early-stage company benefit?",
    answer:
      "We enjoy assisting startups in overcoming their challenges. Opting for Vadavision in your early stages can enhance your growth. We create user-friendly products, attracting more users and making your brand impressive.",
  },
];

const Accordion = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <div className="pb-10 pt-5 mt-">
      <div className="w-full" data-aos="fade-up">
        {questionsData.map((item) => (
          <div data-aos="fade-up" key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <div
                data-aos="fade-up"
                className="flex gap-2 justify-between accordion-title"
              >
                <div
                  data-aos="fade-up"
                  className="Montserrat text-[#CFD3D7] text-sm leading-[24px] font-normal"
                >
                  {item.questions}{" "}
                </div>
                <div className="accordion-icon">
                  {openAccordion === item.id ? (
                    <RiCloseLine size={18} color="#A2A9B0" />
                  ) : (
                    <AiOutlinePlus size={16} color="#DD4242" />
                  )}
                </div>
              </div>
            </div>
            {openAccordion === item.id && (
              <div data-aos="fade-up" className="text-sm accordion-content">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
