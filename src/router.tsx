import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./core/constants/routes";
import { About } from "./features/About/About";
import { Settings } from "./features/Settings/Settings";
import { Square } from "./features/Square/Square";
import { TodoList } from "./features/TodoList/TodoList";
import { ErrorPage } from "./static/ErrorPage/ErrorPage";
import Layout from "./static/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
      { path: Routes.SQUARE, element: <Square />, loader: fetchData },
      { path: Routes.TODO, element: <TodoList /> },
      { path: Routes.SETTINGS, element: <Settings /> },
    ],
  },
  {},
]);

//TODO Remove after API implementation
function fetchData() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        id: 1,
        username: "Roman",
        surename: "Bishko",
      });
    }, 3000);
  });
}
