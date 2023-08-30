"use client";
import React, { useState } from "react";
import { questions } from "./api";
import Questions from "./Questions";

const Accordion = () => {
  const [data, setdata] = useState(questions);
  return (
    <div>
      {data.map((curElem) => {
        return (
          <div>
            {" "}
            <Questions />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
