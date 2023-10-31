"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const questionsData = [
  {
    id: 1,
    questions: "How can I onboard experienced developers from Vadavision?",
    answer:
      "To hire skilled developers from Vadavision, simply reach out to us through our website or contact our team directly. We're here to bring your projects to life with expertise and innovation. ",
  },
  {
    id: 2,
    questions: "Does Vadavision cover SaaS applications?",
    answer:
      " At Vadavision, our expertise encompasses various fields such as Websites, Web Applications, Mobile Apps, SaaS Applications, Business Applications, Blockchain, and AI. We're well-versed in a diverse range of technologies to cater to your needs effectively.        ",
  },
  {
    id: 3,
    questions: "Do you establish Non-Disclosure Agreements with your clients? ",
    answer:
      "Absolutely, we sign Non-Disclosure Agreements with all clients, emphasizing our dedication to safeguarding their intellectual property and ensuring trust and confidentiality in our partnerships.        ",
  },
];

const Accordion = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 500,
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
      <div className="w-full"data-aos="fade-right">
        {questionsData.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex gap-2 justify-between accordion-title">
                <div className="Montserrat text-[#CFD3D7] text-sm leading-[24px] font-normal">
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
              <div className="text-sm accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
