import React from "react";
import { List, Avatar } from "antd";

const ShowVal = (props) => {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {},
          // pageSize: 3,
        }}
        dataSource={props.data}
        renderItem={(item) =>
          item.status !== "Processing" ? null : (
            <List.Item
              extra={
                <img
                  width={200}
                  alt="logo"
                  src="https://media.giphy.com/media/LkrUe3pnMP9kFbaLNC/giphy.gif"
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
              <br />
              <button>
                <a href={item.paymentid}>Validate Payment</a>
              </button>
            </List.Item>
          )
        }
      />
    </div>
  );
};
export default ShowVal;
