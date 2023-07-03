import { getMatchingPage } from "../../commons/const/pages";
import { dotConfigurations } from "../../commons/const/progress_bar";
import style from "./progressbar.module.scss";

const ProgressBar: React.FC = () => {
  const matchingPage = getMatchingPage();

  return (
    <>
      {matchingPage && (
        <div className={style.progress_bar}>
          <div
            className={style.progress}
            style={{ width: `${matchingPage.percentage}%` }}
          />

          <div className={style.levels}>
            <div className={style.dots}>
              {dotConfigurations[matchingPage.label].map((dot, index) => (
                <img key={index} src={dot} alt={`dot_${index}`} />
              ))}
            </div>

            <div className={style.numbers}>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
