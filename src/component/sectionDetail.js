import React from "react";
const SectionDetail = ({ name, value, image }) => {
  return (
    <div className="section-detail">
      <div className="info-detail">
        <span className="caption-section">{name}</span>
        <span className="value">{value}</span>
      </div>
      <div className="image-detail-container">
        <img src={image} className="image-detail" />
      </div>
    </div>
  );
};

export default SectionDetail;
