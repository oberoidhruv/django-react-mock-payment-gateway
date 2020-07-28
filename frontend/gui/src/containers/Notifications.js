import React from "react";
import axios from "axios";
import MessageList from "./MessageList";
import { connect } from "react-redux";
class Notifications extends React.Component {
  state = {
    notificaitons: [],
  };
  componentDidMount() {
    console.log(this.props.token);
    if (this.props.token != null) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      };
      axios.get(`http://127.0.0.1:8000/notifications/`).then((res) => {
        this.setState({
          notificaitons: res.data,
        });
      });
    }
  }
  render() {
    return (
      <div>
        <MessageList data={this.state.notificaitons} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Notifications);
