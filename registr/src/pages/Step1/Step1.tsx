import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { Buttons, InfoInputs, ProgressBar } from "../../commons";
import { SCHEMA_FIRST_LEVEL_PAGE } from "../../commons/const/schemas";
import { useAppSelector } from "../../hooks/selector";
import { selectOptions } from "../../commons/const/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActions } from "../../store/action";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import style from "./step1.module.scss";

const Step1: React.FC = () => {
  const { nickname, name, surname, sex } = useAppSelector(
    (state) => state.user
  );

  const { setNickname, setName, setSurname, setSex, setCurrentPage } =
    useActions();

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(() => {
    if (sex) {
      return {
        value: sex,
        label: sex.charAt(0).toUpperCase() + sex.slice(1),
      };
    }
    return null;
  });
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const {
    setError,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA_FIRST_LEVEL_PAGE),
    defaultValues: {
      nickname: nickname,
      name: name,
      surname: surname,
      sex: sex,
    },
  });

  const handleSelectChange = (
    e: SingleValue<{
      value: string;
      label: string;
    } | null>
  ) => {
    setSelectedOption(e);
    setError("sex", { message: "" });
    setValue("sex", e!.value);
  };

  const onSubmit = (data: any) => {
    setIsFormCompleted(true);
    setNickname(data.nickname);
    setName(data.name);
    setSurname(data.surname);
    setSex(data.sex);
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className={style.wrapper}>
      <ProgressBar />

      <div className={style.inputs}>
        <InfoInputs>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <p>Nickname</p>
              <Input {...register("nickname")} placeholder="Введите nickname" />

              {errors.nickname && (
                <p className={style.error}>{errors.nickname.message}</p>
              )}
            </span>

            <span>
              <p>Name</p>
              <Input {...register("name")} placeholder="Введите name" />

              {errors.name && (
                <p className={style.error}>{errors.name.message}</p>
              )}
            </span>

            <span>
              <p>Surname</p>
              <Input {...register("surname")} placeholder="Введите surname" />

              {errors.surname && (
                <p className={style.error}>{errors.surname.message}</p>
              )}
            </span>

            <span>
              <p>Sex</p>

              <Select
                value={selectedOption}
                options={selectOptions}
                className={style.select}
                onChange={(e) => handleSelectChange(e)}
                placeholder="Выберите пол"
              />

              {errors.sex && (
                <p className={style.error}>{errors.sex.message}</p>
              )}
            </span>

            <div className={style.button}>
              <button type="submit">Save</button>
            </div>
          </form>
        </InfoInputs>
      </div>

      <Buttons
        pathToBack={"/registr-cloud/"}
        pathToNext={"/registr-cloud/step2"}
        isFormCompleted={isFormCompleted}
      />
    </div>
  );
};

export default Step1;
