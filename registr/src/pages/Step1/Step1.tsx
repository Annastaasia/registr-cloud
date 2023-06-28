import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { Buttons, Inputs, ProgressBar } from "../../commons";
import { SCHEMA_FIRST_LEVEL_PAGE } from "../../commons/const/schemas";
import { useAppSelector } from "../../hooks/selector";
import { selectOptions } from "../../commons/const/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActions } from "../../store/action";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import "./firstLevel.scss";

const FirstLevel: React.FC = () => {
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
    <div className="fullName-wrapper">
      <ProgressBar />

      <div className="name-surname-sex-inputs">
        <Inputs>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <p>Nickname</p>
              <Input {...register("nickname")} placeholder="Введите nickname" />

              {errors.nickname && (
                <p className="error">{errors.nickname.message}</p>
              )}
            </span>

            <span>
              <p>Name</p>
              <Input {...register("name")} placeholder="Введите name" />

              {errors.name && <p className="error">{errors.name.message}</p>}
            </span>

            <span>
              <p>Surname</p>
              <Input {...register("surname")} placeholder="Введите surname" />

              {errors.surname && (
                <p className="error">{errors.surname.message}</p>
              )}
            </span>

            <span>
              <p>Sex</p>

              <Select
                value={selectedOption}
                options={selectOptions}
                className="select"
                onChange={(e) => handleSelectChange(e)}
                placeholder="Выберите пол"
              />

              {errors.sex && <p className="error">{errors.sex.message}</p>}
            </span>

            <div className="save-form-button">
              <button type="submit">Сохранить</button>
            </div>
          </form>
        </Inputs>
      </div>

      <Buttons
        pathToBack={"/front-cc-project/"}
        pathToNext={"/front-cc-project/second-level"}
        isFormCompleted={isFormCompleted}
      />
    </div>
  );
};

export default FirstLevel;
