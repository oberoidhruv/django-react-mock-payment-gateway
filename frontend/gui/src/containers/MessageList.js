import React from "react";
import { List, Avatar } from "antd";

const MessageList = (props) => {
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
              width={130}
              alt="logo"
              src="https://media.giphy.com/media/xUA7aWaMCXGMP7Ed8c/giphy.gif"
            />
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://media.giphy.com/media/26AHH7ucTl4kkjxfO/giphy.gif" />
            }
            title={item.title}
          />
          <p>Content: {item.content}</p>
          <p>Customer No.: {item.customer}</p>
          <p>Date.: {item.date_created}</p>
        </List.Item>
      )}
    />
  );
};

export default MessageList;
