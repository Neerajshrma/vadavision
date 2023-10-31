"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

const questionsData = [
  {
    id: 1,
    questions: "What values are important at Vadavision?",
    answer:
      "At Vadavision, we believe in working together, being creative, and doing what's right. We create a friendly environment where everyone's ideas matter, and we encourage our employees to make a real difference. Honesty and doing the right thing are essential to how we work, making sure our workplace is positive and respectful for everyone.  ",
  },
  {
    id: 2,
    questions: "What career opportunities does Vadavision offer?  ",
    answer:
      "At Vadavision, you can choose from various job options like software development, design, web and mobile app development, business development, and HR roles. We promote a creative and innovative workplace where our employees can thrive in their chosen careers.        ",
  },
  {
    id: 3,
    questions: "What is the work culture like at Vadavision? ",
    answer:
      "At Vadavision, we create a friendly and team-oriented work environment. We like new ideas, and we help our employees learn and grow in their jobs. ",
  },
];

const Accordion = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 1000,
        once: true,
        easing: 'ease',
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
      <div data-aos='fade-up' className="w-full">
        {questionsData.map((item) => (
          <div data-aos='fade-up' key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex gap-2 justify-between accordion-title">
                <div data-aos='fade-up' className="Montserrat text-[#CFD3D7] text-sm leading-[24px] font-normal">
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
              <div data-aos='fade-up' className="text-sm accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
