import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import "./Square.scss";

interface Data {
  id: number;
  username: string;
  surename: string;
}

export const Square = () => {
  const data = useLoaderData() as Data;
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("hello", { name: "Alice" })}</p>
      <div>{data.username}</div>
      <div>{data.surename}</div>
      <div>{data.id}</div>
    </div>
  );
};
