import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
class PaymentForm extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    amount: "",
    company: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    // console.log("Form data: ", { formData });
    if (this.props.token != null) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      };
      axios
        .post(`http://127.0.0.1:8000/api/`, {
          number: formData.number,
          name: formData.name,
          expiry: formData.expiry,
          cvc: formData.cvc,
          issuer: formData.issuer,
          amount: formData.amount,
          company: formData.company,
        })
        .then(function (response) {
          alert("Your Payment is now being processed");
          axios.post(`http://127.0.0.1:8000/notifications/`, {
            title: "Transaction Created",
            customer: formData.company,
            content: "The transaction has been created",
          });
          // console.log("this is the response: ", response);
        })
        .catch(function (error) {
          alert("There was a problem with the payment");
          axios.post(`http://127.0.0.1:8000/notifications/`, {
            title: "Transaction Unsuccessful",
            customer: formData.company,
            content: "The transaction could not be initiated",
          });

          console.log(error);
        });
    }
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, issuer, amount, company } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            amount={amount}
            company={company}
            callback={this.handleCallback}
          />
          <br />
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="col-9">
              <input
                type="tel"
                name="company"
                className="form-control"
                placeholder="Company No. (2 Digits)"
                pattern="\d{2}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-9">
              <input
                type="tel"
                name="amount"
                className="form-control"
                placeholder="Amount Paid (5 Digits)"
                pattern="\d{5}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <br />

            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <br />
              <button
                type="primary"
                htmlType="submit"
                onClick={
                  this.props.token == null
                    ? console.log("Please Log in to Continue")
                    : null
                }
              >
                PAY
              </button>
              <button>
                <a
                  href="https://gist.github.com/j3j5/8b3e48ccad746b90a54a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use Test Cards
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(PaymentForm);
