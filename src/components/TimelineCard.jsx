/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const TimelineCard = ({ cardDetails }) => {
  return (
    <VerticalTimelineElement
      date={cardDetails.duration}
      dateClassName="date"
      iconStyle={{ backgroundColor: "#FFB703" }}
      icon={
        <FaGraduationCap
          style={{
            fill: "black",
          }}
        />
      }
    >
      <h1 className="text-2xl font-bold text-primary font-outfit">
        {cardDetails.title}
      </h1>
      <h3 className="mt-2 text-lg font-semibold text-accent">
        {cardDetails.institution}
      </h3>
      <h5 className="mb-2 text-[12px] text-black">{cardDetails.location}</h5>
      <ul className="flex flex-col items-start px-4 list-disc gap-y-2">
        {cardDetails.highlights.map((highlight) => (
          <li key={highlight} className="text-sm font-normal text-zinc-800">
            {highlight}
          </li>
        ))}
      </ul>
      <h5 className="mt-2 text-sm font-bold text-gray-800">
        Grade:{" "}
        <span className="font-semibold text-zinc-800">{cardDetails.grade}</span>
      </h5>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
