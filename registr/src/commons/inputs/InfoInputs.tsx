import style from "./infoinputs.module.scss";

const Inputs: React.FC<InfoInputs> = ({ children }) => {
  return <div className={style.info_inputs}>{children}</div>;
};

export default Inputs;
