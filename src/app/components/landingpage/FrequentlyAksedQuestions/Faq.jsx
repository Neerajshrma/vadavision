"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const questionsData = [
  {
    id: 1,
    questions:
      "What does mobile application development involve, and why is it crucial for my business?",
    answer:
      "Mobile app development means making software for phones and tablets. It's vital for your business because it helps you connect with more people, talk to customers directly, and provide easy services through their mobile devices.",
  },
  {
    id: 2,
    questions: "How can I make money from my mobile app? ",
    answer:
      "There are different ways to make money from your mobile app, such as in-app purchases, subscriptions, ads, or selling the app. The method you choose depends on your app's purpose, who it's for, and your business objectives.",
  },
  {
    id: 3,
    questions:
      "How much time does it usually take to create a mobile app, and what things affect how long it takes?",
    answerMobile:
      "The time it takes to make a mobile app depends on how complicated it is, what features it has, and if it's for iOS, Android, or both. Simple apps can take a few months, but complex ones might take more than a year.",
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
