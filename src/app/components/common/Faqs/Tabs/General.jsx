import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const questionsData = [
  {
    id: 1,
    questions:
      "Is Vadavision open to collaborative project management tools preferred by the client?",
    answer:
      "Certainly, Vadavision values collaboration. We are flexible and can adapt to your preferred project management tools to enhance communication and transparency.",
  },
  {
    id: 2,
    questions:
      "Does Vadavision provide services for both web and mobile app development?",
    answer:
      "Vadavision offers comprehensive services for both web and mobile app development. We create responsive websites and cross-platform mobile applications to cater to diverse user needs.",
  },
  {
    id: 3,
    questions: "How are updates and improvements handled post-launch?",
    answer:
      "Vadavision handles updates and improvements efficiently. We assess feedback, plan updates, and implement improvements seamlessly to enhance your application’s functionality and user experience.",
  },
  {
    id: 4,
    questions:
      "Does Vadavision offer any discounts for long-term projects or partnerships?",
    answer:
      "Yes, Vadavision values long-term partnerships. We provide discounts and special offers for extended projects, fostering mutually beneficial relationships with our clients.",
  },
  {
    id: 5,
    questions:
      "How does Vadavision ensure effective communication with clients?",
    answer:
      "We use various communication channels including emails, video conferences, and project management tools to keep clients updated and ensure smooth communication.",
  },
];
const GeneralTab = () => {
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
      <div className="w-full min-w-[200px]">
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

export default GeneralTab;
