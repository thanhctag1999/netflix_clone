import Header from "./Header";
import "./layout.css";

const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      <div className="container">
        <Header title={title} subtitle="NetFlix" />
        {children}
      </div>
    </div>
  );
};

export default Layout;
