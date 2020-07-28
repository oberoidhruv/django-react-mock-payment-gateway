import React from "react";
import { connect } from "react-redux";
import Payments from "./Payment";
import axios from "axios";

class PaymentList extends React.Component {
  state = {
    payments: [],
  };

  componentDidMount() {
    console.log(this.props.token);
    if (this.props.token != null) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      };
      axios.get(`http://127.0.0.1:8000/api/`).then((res) => {
        this.setState({
          payments: res.data,
        });
      });
    }
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps.token);
    if (newProps) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token,
      };
      axios.get(`http://127.0.0.1:8000/api/`).then((res) => {
        this.setState({
          payments: res.data,
        });
      });
    }
  }
  render() {
    return (
      <div>
        <Payments data={this.state.payments} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(PaymentList);
