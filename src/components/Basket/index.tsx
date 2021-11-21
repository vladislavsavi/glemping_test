import { FC } from "react";
import { Badge, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import classes from "./Basket.module.less";

interface Props {
  itemCount?: number;
}

export const Basket: FC<Props> = ({ itemCount = 0 }) => {
  return (
    <Link to="/basket">
      <Badge className={classes.badge} count={itemCount}>
        <Button
          type="primary"
          className={classes.basket}
          size={"large"}
          shape="circle"
          icon={<ShoppingOutlined />}
        />
      </Badge>
    </Link>
  );
};
