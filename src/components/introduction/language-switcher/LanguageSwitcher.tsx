import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./language-switcher.module.css";

import frenchFlag from "/src/assets/france.png";
import ukFlag from "/src/assets/united-kingdom.png";

const LanguageSwitcher = () => {
  const router = useRouter();

  return (
    <div id="langague-switcher" className={styles["language-switcher"]}>
      <a title="English" onClick={() => router.push("/en")}>
        <Image src={ukFlag} alt="GitHub logo" width={32} height={32} />
      </a>
      <a title="Français" onClick={() => router.push("/fr")}>
        <Image src={frenchFlag} alt="GitHub logo" width={32} height={32} />
      </a>
    </div>
  );
};

export default LanguageSwitcher;
