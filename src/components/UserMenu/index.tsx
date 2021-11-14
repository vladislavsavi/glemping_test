import {FC} from "react";
import {Button, Dropdown} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Menu} from "./Menu";

export const UserMenu: FC = () => {
    return (
        <Dropdown overlay={<Menu/>}>
            <Button type='ghost' shape='circle' size='large' icon={<UserOutlined/>}/>
        </Dropdown>
    );
}
