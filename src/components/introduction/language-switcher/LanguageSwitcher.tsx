import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./language-switcher.module.css";

import frenchFlag from "/src/assets/france.png";
import ukFlag from "/src/assets/united-kingdom.png";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  return (
    <li id="langague-switcher" className={styles["language-switcher"]}>
      <ul>
        <a
          title="English"
          onClick={() => router.push("/en")}
        >
          <Image src={ukFlag} alt="English Flag" width={32} height={32} />
        </a>
      </ul>
      <ul>
        <a
          title="Français"
          onClick={() => router.push("/fr")}
        >
          <Image
            src={frenchFlag}
            alt="Drapeau Français"
            width={32}
            height={32}
          />
        </a>
      </ul>
    </li>
  );
};

export default LanguageSwitcher;
