import React from "react";
import NoticeItem from "./NoticeItem/NoticeItem";

const Notices = () => {
  return (
    <div className="__sweven_notices">
      {/* <SectionHeader title="Notices" /> */}
      <div className="__sweven_notices-items">
        <NoticeItem />
      </div>
    </div>
  );
};

export default Notices;
