import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  const staticData = {
    author: "Roman Bishko",
    year: new Date().getFullYear(),
  };
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Content />
        <Footer author={staticData.author} year={staticData.year} />
      </div>
    </div>
  );
};

export default Layout;
