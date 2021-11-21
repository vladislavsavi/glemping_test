import { FC } from "react";
import { Button, Typography } from "antd";

import classes from "./AboutLand.module.less";

const { Title, Paragraph, Text } = Typography;

export const AboutLand: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Title level={3}>есть земля?</Title>
      <Paragraph>
        Поможем Вам создать Глэмпинг, который будет приносить доход
      </Paragraph>
      <Button type={"ghost"}>Заказать модуль</Button>
    </div>
  );
};
