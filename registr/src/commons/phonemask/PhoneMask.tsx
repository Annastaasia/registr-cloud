import { InputBaseComponentProps } from "@mui/material";
import { PHONE_RU_MASK } from "../../commons/const/phone_mask";
import MaskedInput from "react-text-mask";

// const PhoneMask: React.FC<InputBaseComponentProps> = (props) => {
//   return <MaskedInput mask={PHONE_RU_MASK} {...props} />;
// };

const PhoneMask: React.FC<InputBaseComponentProps> = (props) => {
  return (
    <div>
      <MaskedInput mask={PHONE_RU_MASK} {...props} />
    </div>
  );
};

export default PhoneMask;

// +const SomeContent = React.forwardRef((props, ref) =>
// +  <div {...props} ref={ref}>Hello, World!</div>);
