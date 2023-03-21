import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { About } from "./features/About/About";
import { Settings } from "./features/Settings/Settings";
import { Square } from "./features/Square/Square";
import { TodoList } from "./features/TodoList/TodoList";
import Layout from "./static/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="app" />} />
          <Route path="app" element={<Layout />}>
            <Route path="" element={<About />} />
            <Route path="square" element={<Square />} />
            <Route path="todo" element={<TodoList />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="app" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
