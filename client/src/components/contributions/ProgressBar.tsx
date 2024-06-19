// ProgressBar.js
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-2/3 md:w-3/5 bg-white/10 p-6 rounded-xl mt-8"
    >
      <CircularProgressbar
        value={value}
        maxValue={1}
        styles={buildStyles({
          textColor: "white",
          pathColor: "skyblue",
          trailColor: "white",
        })}
        text={`${(value * 100).toFixed(0)}%`}
      />
    </motion.div>
  );
};

export default ProgressBar;
