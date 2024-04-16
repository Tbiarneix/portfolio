import styles from "./others.module.css";
import { otherItems } from "./otherItems.data";

const Others = () => {
  const expandOnClick = (event: { currentTarget: any }) => {
    const target = event.currentTarget;
    const siblings = Array.from(target.parentNode.children);

    if (target.style.width === "50%") {
      target.style.width = "30%";
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

    target.style.width = "50%";
    siblings.forEach((sibling: any) => {
      if (sibling !== target) {
        sibling.style.width = "20%";
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
          style={{ backgroundImage: `url(${item.backgroudImage})` }}
          onClick={expandOnClick}
        >
          <h3 className={styles["item-title"]}>{item.title}</h3>
          <p className={styles["item-description"]}>{item.descripion}</p>
          <a href={item.url} target="_blank" className={styles["item-link"]}>
            <b>Discover more</b>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Others;
