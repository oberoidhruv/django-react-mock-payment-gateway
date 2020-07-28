import React from "react";
import PaymentForm from "./PaymentForm";

class Store extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h2>Make a Payment here</h2>
          <p>(Be sure to Login first)</p>
        </center>
        <br />
        <center>
          <PaymentForm />
        </center>
      </div>
    );
  }
}

export default Store;
