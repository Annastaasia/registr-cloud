import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/selector";
import { useActions } from "../../store/action";
// import { InfoInputs, MaskComponent } from "../../shared";
// import { SCHEMA_HOME_PAGE } from "../../assets/const/schemas";
// import { folder_icon } from "../../assets/images";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { USER_LINKS } from "../../assets/const/user_links";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
// import Input from "@mui/material/Input";
import "./home.scss";

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
    resolver: yupResolver(SCHEMA_HOME_PAGE),
    defaultValues: {
      email: email,
      phone: phone,
    },
  });

  const onSubmit = (data: any) => {
    setEmail(data.email);
    setPhone(data.phone);

    navigate("/front-cc-project/first-level");
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      <div className="user-header">
        <div className="user-avatar">
          <div className="avatar">РШ</div>
        </div>

        <div className="user-info">
          <p>Руслан Шарифуллин</p>

          <div className="user-links">
            <Link to={USER_LINKS.telegram} target="_blank" className="link">
              <img src={folder_icon} alt="telegram" />
              <p>Telegram</p>
            </Link>

            <Link to={USER_LINKS.github} target="_blank" className="link">
              <img src={folder_icon} alt="github" />
              <p>Github</p>
            </Link>

            <Link to={USER_LINKS.hh} target="_blank" className="link">
              <img src={folder_icon} alt="resume" />
              <p>Resume</p>
            </Link>
          </div>
        </div>
      </div>

      <InfoInputs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>
            <p>Номер телефона</p>
            <Input
              {...register("phone")}
              placeholder="+7 (999) 999-99-99"
              inputComponent={MaskComponent}
            />

            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </span>

          <span>
            <p>Email</p>
            <Input {...register("email")} placeholder="example@mail.ru" />

            {errors.email && <p className="error">{errors.email.message}</p>}
          </span>

          <div className="start-button">
            <button type="submit">Начать</button>
          </div>
        </form>
      </InfoInputs>
    </>
  );
};

export default Main;
