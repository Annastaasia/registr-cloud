import React from "react";
import { Buttons, ProgressBar } from "../../commons";
import { plus_icon, trash_icon } from "../../assets/images";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/selector";
import { useActions } from "../../store/action";
import Input from "@mui/material/Input";
import style from "./step2.module.scss";

const SecondLevel: React.FC = () => {
  const [isFormCompleted] = useState<boolean>(true);

  const { advantages, checkboxGroup, radioGroup } = useAppSelector(
    (state) => state.user
  );

  const { setAdvantages, setCheckboxGroup, setRadioGroup, setCurrentPage } =
    useActions();

  const handleAddInput = () => {
    setAdvantages([...advantages, ""]);
  };

  const handleDeleteInput = (index: number) => {
    setAdvantages(advantages.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...advantages];
    newInputs[index] = value;
    setAdvantages(newInputs);
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className={style.avantages_wrapper}>
      <ProgressBar />

      <div className={style.inputs}>
        <p>Advantages</p>

        {advantages.map((input, index) => (
          <div key={index}>
            <Input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />

            <button onClick={() => handleDeleteInput(index)}>
              <img src={trash_icon} alt="" />
            </button>
          </div>
        ))}

        <div className={style.add_button}>
          {advantages.length !== 3 && (
            <button onClick={handleAddInput}>
              <img src={plus_icon} alt="" />
            </button>
          )}
        </div>
      </div>

      <div className={style.checkbox}>
        <p>Checkbox group</p>

        {Array.isArray(checkboxGroup) &&
          checkboxGroup.map((input, index) => (
            <div key={index} className={style.row}>
              <input
                type="checkbox"
                id={`checkbox${index + 1}`}
                checked={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCheckboxGroup([
                    ...checkboxGroup.slice(0, index),
                    e.target.checked,
                    ...checkboxGroup.slice(index + 1),
                  ])
                }
              />
              <p>{index + 1}</p>
              <br />
            </div>
          ))}
      </div>

      <div className={style.radio}>
        <p>Radio group</p>

        {Array.isArray(radioGroup) &&
          radioGroup.map((input, index) => (
            <div key={index} className={style.row}>
              <input
                type="radio"
                id={`radio${index + 1}`}
                name="radioGroup"
                checked={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRadioGroup([
                    ...radioGroup.slice(0, index),
                    e.target.checked,
                    ...radioGroup.slice(index + 1),
                  ])
                }
              />
              <p>{index + 1}</p>

              <br />
            </div>
          ))}
      </div>

      <Buttons
        pathToBack={"/registr-cloud/step1"}
        pathToNext={"/registr-cloud/step3"}
        isFormCompleted={isFormCompleted}
      />
    </div>
  );
};

export default SecondLevel;
