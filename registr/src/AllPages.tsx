import Main from "./pages/Main/Main";
import Step1 from "./pages/Step1/Step1";
import Step2 from "./pages/Step2/Step2";
import Step3 from "./pages/Step3/Step3";
import { useAppSelector } from "./hooks/selector";
import { Routes, Route } from "react-router-dom";

const AllPages: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.container);

  return (
    <div
      className={
        currentPage === "/registr/" || currentPage === "/registr/step3"
          ? "main-container"
          : "main-container high"
      }
    >
      <Routes>
        <Route path="/registr/" element={<Main />} />
        <Route path="/registr/step1" element={<Step1 />} />
        <Route path="/registr/step2" element={<Step2 />} />
        <Route path="/registr/step3" element={<Step3 />} />
      </Routes>
    </div>
  );
};

export default AllPages;
