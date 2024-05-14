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
        <button
          title="English"
          name="English-Language"
          onClick={() => router.push("/en")}
        >
          <Image src={ukFlag} alt="English Flag" width={32} height={32} />
        </button>
      </ul>
      <ul>
        <button
          title="Français"
          name="Langue-Francaise"
          onClick={() => router.push("/fr")}
        >
          <Image
            src={frenchFlag}
            alt="Drapeau Français"
            width={32}
            height={32}
          />
        </button>
      </ul>
    </li>
  );
};

export default LanguageSwitcher;
