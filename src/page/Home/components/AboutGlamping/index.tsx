import { FC } from "react";
import { Button, Typography } from "antd";

import classes from "./AboutGlamping.module.less";

const { Title, Paragraph, Text } = Typography;

export const AboutGlamping: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Title level={3}>глэмпинг</Title>
      <Paragraph className={classes.paragraph} strong>
        Размещения
      </Paragraph>
      <Paragraph className={classes.paragraph}>
        Забронируй комфортный отдых в самых красивых уголках Казахстана
      </Paragraph>

      <Paragraph className={classes.paragraph} strong>
        Локации
      </Paragraph>
      <Paragraph className={classes.paragraph}>
        Выбор локаций с потрясающей природой для удобного расположения вашего
        модуля
      </Paragraph>
      <Button>Выбрать глэмпинг</Button>
    </div>
  );
};
