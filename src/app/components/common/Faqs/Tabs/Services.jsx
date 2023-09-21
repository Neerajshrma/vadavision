import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

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
];
const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };
  return (
    <div>
      <div className="accordion">
        {questionsData.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex justify-between accordion-title">
                <div className="Montserrat text-[#CFD3D7] text-sm leading-[24px] font-normal">
                  {item.questions}{" "}
                </div>
                <div className="accordion-icon">
                  {openAccordion === item.id ? (
                    <RiCloseLine size={18} color="#A2A9B0" />
                  ) : (
                    <AiOutlinePlus size={18} color="#DD4242" />
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

export default Services;
