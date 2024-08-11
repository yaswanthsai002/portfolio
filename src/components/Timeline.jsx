/* eslint-disable react/prop-types */
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";

const Timeline = ({ timelineDetails }) => {
  return (
    <VerticalTimeline>
      {timelineDetails.map((item) => (
        <TimelineCard cardDetails={item} key={item.id} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
