import Main from "../../pages/Main/Main";
// import Step1 from "../../pages/Step1/Step1";
import { useAppSelector } from "../../hooks/selector";
import { Routes, Route } from "react-router-dom";

const AllPages: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.container);

  return (
    <div
      className={
        currentPage === "/registr/" || currentPage === "/registr/third-level"
          ? "main-container"
          : "main-container high"
      }
    >
      <Routes>
        <Route path="/registr/" element={<Main />} />
        {/* <Route path="/registr/first-level" element={<Step1 />} /> */}
        {/* <Route
          path="/registr/second-level"
          element={<SecondLevel />}
        /> */}
        {/* <Route path="/registr/third-level" element={<ThirdLevel />} /> */}
      </Routes>
    </div>
  );
};

export default AllPages;
