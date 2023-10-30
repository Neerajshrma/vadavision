"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const questionsData = [
  {
    id: 1,
    questions: "How Does Vadavision Stay Updated with Industry Trends?    ",
    answer:
      "Vadavision prides itself on staying ahead of the curve. Our team actively engages in continuous learning, attends industry conferences, and explores emerging technologies. By embracing the latest trends, we offer cutting-edge solutions to our clients.",
  },
  {
    id: 2,
    questions: " How Does Vadavision Ensure Data Security?    ",
    answer:
      "At Vadavision, we prioritize data security. We implement robust encryption protocols, stringent access controls, and regular security audits to safeguard your sensitive information. Rest assured, your data is in safe hands with us.",
  },
  {
    id: 3,
    questions: "What is Vadavision's Approach to Client Collaboration?    ",
    answer:
      "Our client collaboration approach is highly interactive and personalized. We involve clients at every stage of the project, ensuring transparent communication, regular updates, and feedback integration. Your input is invaluable in shaping the final outcome.",
  },
  {
    id: 4,
    questions: "How Does Vadavision Foster Innovation in Projects?",
    answer:
      "Innovation is at the core of Vadavision's approach. We encourage creativity, brainstorming sessions, and out-of-the-box thinking within our team. By fostering an innovative environment, we deliver unique and cutting-edge solutions to our clients.",
  },
  {
    id: 3,
    questions: "What Is Vadavision's Response Time for Client Inquiries?",
    answer:
      " Vadavision values your time. We strive to respond to all client inquiries promptly. Our dedicated team ensures swift communication, addressing your queries efficiently, and keeping you informed throughout the process.",
  },
];

const Accordion = () => {
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
