import React from "react";
import { Avatar, List, Skeleton } from "antd";

const list = [
  {
    gender: "male",
    name: { title: "Mr", first: "Miro", last: "Marttila" },
    email: "miro.marttila@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Miro", last: "Marttila" },
    email: "miro.marttila@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "FI",
  },
];
function Home() {
  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => 
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        }
      />
    </div>
  );
}

export default Home;
