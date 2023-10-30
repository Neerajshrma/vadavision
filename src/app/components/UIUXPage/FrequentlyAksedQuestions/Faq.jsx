"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const questionsData = [
  {
    id: 1,
    questions:
      "How do you make sure the design works well on different devices in UI/UX projects?",
    answer:
      "Responsive design is crucial for UI/UX, ensuring your interface works well on different devices. We make sure your design adapts smoothly to various screen sizes, providing a consistent user experience. Our approach involves meticulous planning, flexible elements, and rigorous testing for seamless performance across platforms.",
  },

  {
    id: 2,
    questions: "How does branding impact UI/UX design?    ",
    answer:
      "Branding plays a vital role in UI/UX design by creating a consistent visual identity. By integrating brand elements like colors and logos, UI/UX designs enhance brand recognition and maintain a unified brand image.",
  },
  {
    id: 3,
    questions: "Why is User Research Important in UI/UX Design?",
    answer:
      "User research is foundational at Vadavision. By understanding user behaviors and preferences, we create tailored, intuitive interfaces. Aligning designs with user needs enhances satisfaction, making research vital for our UI/UX services.",
  },
];

const Accordion = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({

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
    <div className="pb-10 pt-5 mt-" data-aos='zoom-in'>
      <div className="w-full">
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
