import React from "react";
import "./ItemActu.css";
import { txtDate } from "../../utils";
import PropTypes from "prop-types";

const ItemActu = ({ date, intitule, texteactu }) => {
  let textDate = txtDate(date);

  ItemActu.propTypes = {
    date: PropTypes.string.isRequired,
    intitule: PropTypes.string.isRequired,
    texteactu: PropTypes.string.isRequired,
  };



  return (
    <>
      <article className="itemActu">
        <h3>{intitule}</h3>
        <span className="dateActu">{"Publié le  " + textDate}</span>
        <p>{texteactu}</p>
      </article>
    </>
  );
};

export default ItemActu;
