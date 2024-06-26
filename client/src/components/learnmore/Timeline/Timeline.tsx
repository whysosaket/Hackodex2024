import "./timeline.css";
import { timelineData } from "../lmseed";

const Timeline = () => {
  return (
    <>
      <div className="timeline">
        <div className="outer">
          {timelineData.events.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="info">
                  <h3 className="title">{item.title}</h3>
                  <p className="dateee text-white text-xs my-2">{item.date}</p>
                  <p className="">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
