import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Form, Card, Radio, Button } from "antd";

class PaymentDetail extends React.Component {
  state = {
    payment: {},
    visible: true,
  };

  componentWillReceiveProps(newProps) {
    const paymentid = this.props.match.params.paymentid;
    console.log(newProps);
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token,
      };
      axios.get(`http://127.0.0.1:8000/api/${paymentid}/`).then((res) => {
        this.setState({
          payment: res.data,
        });
      });
    }
  }

  render() {
    const onFinish = (values) => {
      // console.log("Success:", values);
      // console.log("ID: ", this.state.payment);

      if (values.radio === "delete") {
        if (this.props.token != null) {
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: this.props.token,
          };
          axios
            .delete(
              `http://127.0.0.1:8000/api/${this.state.payment.paymentid}/`,
              {
                status: values.status,
                number: this.state.payment.number,
                name: this.state.payment.name,
                expiry: this.state.payment.expiry,
                cvc: this.state.payment.cvc,
                issuer: this.state.payment.issuer,
                amount: this.state.payment.amount,
                company: this.state.payment.company,
              }
            )
            .then(function (response) {
              alert("Your request has been processed");
              // console.log("this is the response: ", response);
            })
            .catch(function (error) {
              alert("There was a problem processing your request", error);
              console.log(error);
            });
        }
      } else if (values.radio === "update") {
        if (this.props.token != null) {
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: this.props.token,
          };
          axios
            .put(`http://127.0.0.1:8000/api/${this.state.payment.paymentid}/`, {
              status: values.status,
              number: this.state.payment.number,
              name: this.state.payment.name,
              expiry: this.state.payment.expiry,
              cvc: this.state.payment.cvc,
              issuer: this.state.payment.issuer,
              amount: this.state.payment.amount,
              company: this.state.payment.company,
            })
            .then(function (response) {
              alert("Your Payment is now being processed");
              // console.log("this is the response: ", response);
            })
            .catch(function (error) {
              alert("There was a problem with the payment", error);
              console.log(error);
            });
        }
      }
    };
    return (
      <div>
        <Card title={this.state.payment.status}>
          <p>Payment ID: {this.state.payment.paymentid}</p>
          <p>Company ID: {this.state.payment.company}</p>
          <p>Amount: ${this.state.payment.amount}</p>
          <p>Payment by {this.state.payment.issuer} Card</p>
          <Form name="basic" onFinish={onFinish}>
            <Form.Item name="radio" label="Validation Method: ">
              <Radio.Group>
                <Radio value="update">Update</Radio>
                <Radio value="delete">Delete</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="status" label="Change Payment Status: ">
              <Radio.Group>
                <Radio value="Successful">Successful</Radio>
                <Radio value="Declined">Declined</Radio>
                <Radio value="Disputed">Disputed</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(PaymentDetail);
