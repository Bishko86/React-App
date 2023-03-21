import { Outlet } from "react-router-dom";
import "./Content.scss";

export default function Content(): JSX.Element {
  return (
    <main>
      <Outlet />
    </main>
  );
}
