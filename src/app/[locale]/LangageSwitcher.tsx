import { useTranslations } from 'next-intl';

const LanguageSwitcher = () => { 
    // const i18n = useTranslations();
    // const changeLanguage = (language: string) => {
    //     i18n.changeLanguage(language);
    // }

    return (
        <div>
            <button onClick={() => ('en')}>EN</button>
            <button onClick={() => ('fr')}>FR</button>
        </div>
    )
}

export default LanguageSwitcher;