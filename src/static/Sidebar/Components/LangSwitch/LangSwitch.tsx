import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "./LangSwitch.scss";

export const LanguageSwitcher = (): JSX.Element => {
  const { i18n, t } = useTranslation();
  const language = "English";
  const handle = (e: React.MouseEvent<HTMLElement>) => {console.error(e, 'click');
  }

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

    return (
      <div className="lng-switch">
        <img src="" alt="flag"></img>
        <span>{language}</span>
        <span className="chevron" onClick={ (e: React.MouseEvent<HTMLElement>) => handle(e)}>{">"}</span>
      </div>
    );

    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">{t("en")}</option>
      <option value="ua">{t("ua")}</option>
    </select>
}
