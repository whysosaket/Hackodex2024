import "./resources.css";
import { resources } from "../lmseed";

const Resources = () => {
  return (
    <>
      <div className="list mt-6">
        <ul>
          {resources.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url} target="_blank">
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Resources;
