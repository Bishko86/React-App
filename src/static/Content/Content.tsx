import { Outlet, useNavigation } from "react-router-dom";
import "./Content.scss";

export default function Content(): JSX.Element {
  const { state } = useNavigation();
  return (
    <main id="main" className="main-content">
      {state === "loading" ? <div role="loader"> Loading </div> : <Outlet />}
    </main>
  );
}
