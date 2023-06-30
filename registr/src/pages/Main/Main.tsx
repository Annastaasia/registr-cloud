// import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/selector";
import { useActions } from "../../store/action";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALID_FORM } from "../../commons/validform/ValidForm";
import { LINKS } from "../../commons/links/Links";
import InfoInputs from "../../commons/inputs/InfoInputs";
import PhoneMask from "../../commons/phonemask/PhoneMask";
import { folder_icon } from "../../assets/images";
import Input from "@mui/material/Input";
import style from "./main.module.scss";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { phone, email } = useAppSelector((state) => state.user);
  const { setPhone, setEmail, setCurrentPage } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VALID_FORM),
    defaultValues: {
      email: email,
      phone: phone,
    },
  });

  const onSubmit = (data: any) => {
    setEmail(data.email);
    setPhone(data.phone);

    navigate("/registr/step1");
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      <div className={style.user_header}>
        <div className={style.user_avatar}>
          <div className={style.avatar}>АВ</div>
        </div>

        <div className={style.user_info}>
          <p className={style.user_p}>Анастасия Шитенкова</p>

          <div className={style.user_links}>
            <Link to={LINKS.telegram} target="_blank" className={style.link}>
              <img src={folder_icon} alt="telegram" />
              <p>Telegram</p>
            </Link>

            <Link to={LINKS.github} target="_blank" className={style.link}>
              <img src={folder_icon} alt="github" />
              <p>Github</p>
            </Link>

            <Link to={LINKS.hh} target="_blank" className={style.link}>
              <img src={folder_icon} alt="resume" />
              <p>Resume</p>
            </Link>
          </div>
        </div>
      </div>

      <InfoInputs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>
            <p className={style.p_number}>Номер телефона</p>
            <Input
              {...register("phone")}
              placeholder="+7 (999) 999-99-99"
              inputComponent={PhoneMask}
            />

            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </span>

          <span>
            <p>Email</p>
            <Input {...register("email")} placeholder="example@mail.ru" />

            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
          </span>

          <div className={style.start_button}>
            <button type="submit" className={style.button}>
              Начать
            </button>
          </div>
        </form>
      </InfoInputs>
    </>
  );
};

export default Main;
