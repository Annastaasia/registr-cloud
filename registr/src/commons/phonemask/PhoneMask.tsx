import { InputBaseComponentProps } from "@mui/material";
import { PHONE_RU_MASK } from "../../commons/const/phone_mask";
import MaskedInput from "react-text-mask";

const PhoneMask: React.FC<InputBaseComponentProps> = (props) => {
  return <MaskedInput mask={PHONE_RU_MASK} {...props} />;
};

export default PhoneMask;
