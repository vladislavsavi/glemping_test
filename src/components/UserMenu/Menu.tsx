import { FC } from "react";
import { Menu as MenuAntd } from "antd";

export const Menu: FC = () => {
  return (
    <MenuAntd>
      <MenuAntd.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          1nd menu item (disabled)
        </a>
      </MenuAntd.Item>
      <MenuAntd.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          2rd menu item (disabled)
        </a>
      </MenuAntd.Item>
      <MenuAntd.Item danger>a danger item</MenuAntd.Item>
    </MenuAntd>
  );
};
