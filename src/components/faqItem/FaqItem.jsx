import React from "react";
import "./FaqItem.css";
const FaqItem = ({ titre, contenu }) => {
  return (
    <>
      <details className="faqItemWrapper">
        <summary>
          <h3>{titre}</h3>
        </summary>
        <ul className="faqItemList">
          {contenu.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </details>
    </>
  );
};

export default FaqItem;
