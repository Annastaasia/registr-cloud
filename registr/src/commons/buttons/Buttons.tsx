import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./buttons.scss";

const Buttons: React.FC<IButtons> = ({
  pathToBack,
  pathToNext,
  isDone,
  isFormCompleted,
  startSendProcess,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSending, setIsSending] = useState<boolean>(true);

  useEffect(() => {
    if (location.pathname === "/registr/about") {
      setIsSending(true);
      return;
    }

    setIsSending(false);
  }, [location]);

  return (
    <div
      className={isSending ? "back-next-buttons sending" : "back-next-buttons"}
    >
      <button onClick={() => navigate(pathToBack)}>Back</button>

      {pathToNext && isFormCompleted && (
        <button onClick={() => navigate(pathToNext)}>Continue</button>
      )}

      {isDone && isFormCompleted && (
        <button onClick={() => startSendProcess!()}>Send</button>
      )}
    </div>
  );
};

export default Buttons;
