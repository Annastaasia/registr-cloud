import "./infoinputs.module.scss";

const Inputs: React.FC<InfoInputs> = ({ children }) => {
  return <div className="info-inputs">{children}</div>;
};

export default Inputs;
