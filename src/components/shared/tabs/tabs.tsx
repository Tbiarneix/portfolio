import { useState } from "react";
import styles from "./tabs.module.scss";

const Tabs: React.FC = ({
  firstTab,
  secondTab,
  firstContent,
  secondContent,
}: string) => {
  const [activeTab, setActiveTab] = useState(firstTab);

  const switchTab = () => {
    if (activeTab === firstTab) {
      setActiveTab("first-tab");
    } else {
      setActiveTab("second-tab");
    }
  };

  return (
    <>
      <div className={styles.tab}>
        <h4
          className={activeTab === firstTab ? styles["unactive-tab"] : ""}
          onClick={switchTab}
        >
          firstTabTitle
          {/* {tDescription("EXPERIENCES.EXPERIENCES_TITLE")} */}
        </h4>
        <h4
          className={activeTab === secondTab ? styles["unactive-tab"] : ""}
          onClick={switchTab}
        >
          secondTabTitle
          {/* {tDescription("FORMATIONS.FORMATIONS_TITLE")} */}
        </h4>
      </div>
      <hr />
      {activeTab === firstTab ? (
        <>
          {firstContent}
        </>
      ) : (
        <>
         {secondContent}
        </>
      )}
    </>
  );
};

export default Tabs;
