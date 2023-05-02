import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<>LOADING...</>} />
    </div>
  );
}

export default App;
