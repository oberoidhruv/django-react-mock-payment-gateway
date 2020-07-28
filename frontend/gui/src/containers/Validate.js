import React from "react";
import axios from "axios";
import ShowVal from "./ShowVal";
import { connect } from "react-redux";
class Validate extends React.Component {
  state = {
    pending: [],
  };
  componentDidMount() {
    console.log(this.props.token);
    if (this.props.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      };
      axios.get(`http://127.0.0.1:8000/api/`).then((res) => {
        this.setState({
          pending: res.data,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ShowVal data={this.state.pending} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Validate);
