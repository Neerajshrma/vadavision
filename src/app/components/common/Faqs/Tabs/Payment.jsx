import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const questionsData = [
  {
    id: 1,
    questions: "How can I make a payment for Vadavision's software services?",
    answer:
      "Vadavision accepts payments through various methods, including credit/debit cards, PayPal, bank transfers, and other secure online payment gateways.",
  },
  {
    id: 2,
    questions: "Is my payment information secure with Vadavision?",
    answer:
      "Yes, Vadavision takes data security seriously. We use encryption and follow industry standards to protect your payment information. Your data is safe and confidential.",
  },
  {
    id: 3,
    questions: "Are there any additional fees or charges for making payments?",
    answer:
      " Vadavision does not charge additional fees for standard payment methods. However, please check with your bank or payment provider for any transaction fees they might apply.",
  },
  {
    id: 4,
    questions: "What currency is accepted for payments to Vadavision?",
    answer:
      "Vadavision accepts payments in multiple currencies. During the checkout process, you can select your preferred currency. Please note that currency exchange rates may apply, depending on your payment method and location.",
  },
  {
    id: 5,
    questions:
      "Can I get a refund if I am dissatisfied with the software services provided by Vadavision?",
    answer:
      "Vadavision offers a refund policy. Please refer to our Terms of Service or contact customer support for detailed information about our refund process and eligibility criteria.",
  },
];
const Payment = () => {
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

export default Payment;
