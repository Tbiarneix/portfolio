import { useTranslations } from "next-intl";

import { otherItems } from "./otherItems.data";

import styles from "./others.module.css";

const Others: React.FC = () => {
  const t = useTranslations("Description");

  const expandOnClick = (event: { currentTarget: any }) => {
    const target = event.currentTarget;
    const siblings = Array.from(target.parentNode.children);

    if (target.style.width === "60%") {
      target.style.width = "30%";
      target.style.backgroundImage = target.style.backgroundImage.split(",")[8];
      siblings.forEach((sibling: any) => {
        if (sibling !== target) {
          sibling.style.width = "30%";
        } else {
          sibling.children[1].style.visibility = "hidden";
          sibling.children[2].style.visibility = "hidden";
        }
      });
      return;
    }

    target.style.width = "60%";
    target.style.backgroundImage = `linear-gradient(rgba(75, 75, 75, 0.8), rgba(75, 75, 75, 0.8)), ${target.style.backgroundImage}`;
    siblings.forEach((sibling: any) => {
      if (sibling !== target) {
        sibling.style.width = "20%";
        sibling.style.backgroundImage =
          sibling.style.backgroundImage.split(",")[8];
        sibling.children[1].style.visibility = "hidden";
        sibling.children[2].style.visibility = "hidden";
      } else {
        sibling.children[1].style.visibility = "visible";
        sibling.children[2].style.visibility = "visible";
      }
    });
  };

  return (
    <div className={styles.group}>
      {otherItems.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          style={{
            backgroundImage: `url(${item.backgroudImage})`,
          }}
          onClick={expandOnClick}
        >
          <h3 className={styles["item-title"]}>{t(`${item.title}`)}</h3>
          <p className={styles["item-description"]}>
            {t(`${item.descripion}`)}
          </p>
          <a href={item.url} target="_blank" className={styles["item-link"]}>
            <b>{t("OTHERS.DISCOVER")}</b>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Others;
