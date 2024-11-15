import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex justify-start gap-4 items-center bg-base-200 px-4 py-2 rounded-sm">
      <p className="bg-[#D72050] text-white p-2 w-1/12 text-center">Latest</p>
      <Marquee speed={80} pauseOnHover={true} className="flex gap-10">
        <Link>Chief Adviser Professor Muhammad Yunus returned home this evening
        wrapping up his Baku tour to attend the global climate meet Conference
        of Parties-29 (COP29).</Link>
        <Link>Chief Adviser Professor Muhammad Yunus returned home this evening
        wrapping up his Baku tour to attend the global climate meet Conference
        of Parties-29 (COP29).</Link>
        <Link>Chief Adviser Professor Muhammad Yunus returned home this evening
        wrapping up his Baku tour to attend the global climate meet Conference
        of Parties-29 (COP29).</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
