import React from "react";
import { List, Avatar } from "antd";

const Payments = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          // console.log(page);
        },
        // pageSize: 10,
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          extra={
            <img
              width={250}
              alt="logo"
              src="https://media.giphy.com/media/3o7TKpe3yf9nCnmD0A/giphy.gif"
            />
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://media.giphy.com/media/26AHH7ucTl4kkjxfO/giphy.gif" />
            }
            title={item.status}
            date={item.date}
          />
          <p>Payment ID: {item.paymentid}</p>
          <p>Company ID: {item.company}</p>
          <p>Amount: ${item.amount}</p>
          <p>Made with {item.issuer} Card</p>
          <p>Card Ending: {item.number.slice(-4)}</p>
          <p>Created on: {item.time_created}</p>
          <p>Last Update on: {item.time_transact}</p>
        </List.Item>
      )}
    />
  );
};

export default Payments;
