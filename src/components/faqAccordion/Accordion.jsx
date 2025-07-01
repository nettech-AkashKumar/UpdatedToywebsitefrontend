import React, { useState } from "react";
import {questions} from "./api.jsx"
import "./accordian.css";
import Myaccordian from "./MyAccordion.jsx";

const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="accoridanmain ">
        <section className="main-div-faq">
          <h4 className="faq-title">Frequently asked questions(FAQs)</h4>
          <p className="readmore">
            Learn more about our product details and shipping information here.
          </p>
        </section>
        <section className="faqs">
          {data.map((curElem) => {
            const { id } = curElem;
            return <Myaccordian key={id} {...curElem} />;
          })}
        </section>
        <div className="faq-bottom-section">
          <div className="faq-more-questions">
            <h4 className="still">Still have questions?</h4>
            <p className="cant">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="contacts">Contact us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
