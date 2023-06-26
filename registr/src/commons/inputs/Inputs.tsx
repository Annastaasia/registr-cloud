import "./inputs.module.scss";

const Inputs: React.FC<IInputs> = ({ children }) => {
  return <div className="info-inputs">{children}</div>;
};

export default Inputs;
