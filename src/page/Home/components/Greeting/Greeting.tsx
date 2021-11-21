import { FC } from "react";
import { Typography } from "antd";
import classes from "./Greeting.module.less";

const { Paragraph, Text } = Typography;

export const Greeting: FC = () => {
  return (
    <section className={classes.greetingSection}>
      <h1 className={classes.title}>
        Glam<span>Ping</span>
      </h1>
      <Paragraph className="text-thin">
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
