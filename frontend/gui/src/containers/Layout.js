import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {this.props.isAuthenticated ? (
              <Menu.Item key="1" onClick={this.props.logout}>
                Logout
              </Menu.Item>
            ) : (
              <Menu.Item key="1">
                <Link to="/login/">Login</Link>
              </Menu.Item>
            )}
            <Menu.Item key="2">
              <Link to="/">Payments</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/store/">Store</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/validate/">Validate</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/notifications/">Notifications</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <a
                href="http://127.0.0.1:8000/api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
            </Menu.Item>
            <Menu.Item key="7">
              Server
              <a
                href="http://127.0.0.1:8000/admin/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/Signup/">Signup</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
