import { Menu } from "antd";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: "",
  },
  {
    label: <Link to="/new">New Post</Link>,
    key: "/new",
    icon: "",
  },
];

const HeaderMenu = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styles.headerMenu} />
  );
};

export default HeaderMenu;
