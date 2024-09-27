import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import JoppyMenu from "./component/joppymenu";
import Techies from "./component/techies";
import Employers from "./component/employers";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100%" }}>
        <JoppyMenu collapsed={collapsed} onToggle={toggleMenu} />
        <Layout
          style={{
            marginLeft: collapsed ? "82px" : "236px",
            transition: "margin-left 0.2s",
          }}
        >
          <Content style={{ padding: "20px", overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<Techies />} />
              <Route path="/techies" element={<Techies />} />
              <Route path="/employers" element={<Employers />} />
              {/* Add other routes here */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
