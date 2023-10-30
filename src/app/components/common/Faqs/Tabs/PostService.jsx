import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const questionsData = [
  {
    id: 1,
    questions: "What is Post-Service Support?",
    answer:
      "Post-Service Support refers to the assistance and solutions provided after the completion of a project. It includes maintenance, troubleshooting, updates, and technical assistance to ensure your software continues to function optimally.",
  },
  {
    id: 2,
    questions: "What Does Post-Service Support Include?",
    answer:
      "Our Post-Service Support includes regular software updates, bug fixes, security patches, and 24/7 technical assistance. We also offer performance optimization, feature enhancements, and compatibility checks with new technologies.",
  },
  {
    id: 3,
    questions: "How Do I Report an Issue for Post-Service Support?",
    answer:
      "You can report any issues or request support by contacting our dedicated support team via email, phone, or through our online support portal. Provide a detailed description of the problem, and our experts will assist you promptly.",
  },
  {
    id: 4,
    questions: "Can I Extend the Post-Service Support Period if Needed?",
    answer:
      " Yes, you can extend the Post-Service Support period by contacting our sales or support team. We offer flexible options to accommodate your ongoing support needs and ensure the continued success of your software.",
  },
  {
    id: 5,
    questions: "How Can Post-Service Support Benefit My Business?",
    answer:
      "Post-Service Support ensures the longevity and efficiency of your software, reducing downtime, enhancing security, and providing a seamless user experience. It safeguards your investment, allowing your business to focus on growth and innovation.",
  },
];
const PostService = () => {
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

export default PostService;
