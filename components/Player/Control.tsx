import ControlStyle from "../../styles/Control.module.css";

export const Control = () => {
  return (
    <div className={ControlStyle.ControlContainer}>
      <div>
        <p>previouse</p>
        <p>pause play</p>
        <p>next</p>
      </div>
      <div>
        <p>seeker</p>
      </div>
    </div>
  );
};

