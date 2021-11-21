import { FC } from "react";
import { Typography } from "antd";
import classes from "./Greeting.module.less";

const { Title, Paragraph, Text } = Typography;

export const Greeting: FC = () => {
  return (
    <section className={classes.greetingSection}>
      <Title className={classes.title}>
        Glam<Text className={classes.thin}>Ping</Text>
      </Title>
      <Paragraph className={classes.about}>
        <Text italic strong>
          Глэмпинг
        </Text>{" "}
        — роскошь наедине с природой.
        <br />
        Отдыхай с комфортом вдали от цивилизации
      </Paragraph>
    </section>
  );
};
