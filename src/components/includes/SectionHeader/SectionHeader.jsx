import React from "react";

const SectionHeader = ({ title, className, style }) => {
  return (
    <div className={`__sweven_sectionHeader ${className}`} style={style}>
      {title}
    </div>
  );
};

export default SectionHeader;
