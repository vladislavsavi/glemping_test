import { FC } from "react";
import { Button, Typography } from "antd";
import classes from "./AboutMarket.module.less";

const { Title, Paragraph, Text } = Typography;

export const AboutMarket: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Title level={3}>Магазин</Title>
      <Paragraph>
        Закажи Глэм-модуль и установи его в самом красивом месте Казахстана!
        Отдыхай и зарабатывай
      </Paragraph>
      <Button type={"ghost"}>Заказать модуль</Button>
    </div>
  );
};
