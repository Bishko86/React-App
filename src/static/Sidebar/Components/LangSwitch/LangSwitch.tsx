import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import "./LangSwitch.scss";
import { Languages } from "../../../../core/enums/language.enum";

export const LanguageSwitcher: React.FC<{ isOpened: boolean }> = ({
  isOpened,
}): JSX.Element => {
  const [isExapanded, setExpanded] = useState(false);
  const { i18n, t } = useTranslation();
  const currLanguage = i18n.language;
  const langs = [
    currLanguage,
    ...Object.values(Languages).filter((lang) => lang !== currLanguage),
  ].filter((item) => isExapanded || item === currLanguage);

  const flagList = langs.map((key) =>
    <div
      className="flag flag-list"
      key={key + 'flag'}
      onClick={(e: React.MouseEvent<HTMLElement>) => handle(key)}
    >
      <img src={`/icons/${key}_flag.png`} alt="flag" />
    </div>);

  const langList = langs.map((key) =>
    <div
      className="item item-list"
      key={key}
      onClick={() => handle(key)}
    >
      {t(key)}
    </div>);

  const handle = (e: string) => {
    i18n.changeLanguage(e);
  }

  const showLangList = () => {
    setExpanded(true);
  }

  const hideLangList = () => {
    setExpanded(false);
  }

  return (
    <div className="lng-switch" onMouseEnter={showLangList} onMouseLeave={hideLangList}>
      {isOpened ? <img src={`/icons/${currLanguage}_flag.png`} alt="flag" /> : <div>{flagList}</div>}
      {isOpened && <div className="list">{langList}</div>}
    </div>
  );
}
