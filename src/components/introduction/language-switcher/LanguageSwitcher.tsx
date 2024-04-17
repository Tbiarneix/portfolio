import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/en')}>&#127468;&#127463;</button>
      <button onClick={() => router.push('/fr')}>&#127467;&#127479;</button>
    </div>
  );
};

export default LanguageSwitcher;
