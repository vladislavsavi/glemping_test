import {FC} from "react";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {EnvironmentTwoTone} from "@ant-design/icons";
import {ReactComponent as Logo} from "@assets/imgs/Logo.svg";

import classes from './Header.module.less';

export const Header: FC = () => {
    return (
        <header className={classes.header}>
            <div className={clsx('container', classes.headerContentWrapper)}>

                <Link to='/'>
                    <Logo/>
                </Link>

                <div>
                    <Link to='/'>
                        <Button type='link'>главная</Button>
                    </Link>
                    <Link to='/'>
                        <Button icon={<EnvironmentTwoTone/>} type='link'>карта глэмпингов</Button>
                    </Link>
                    <Link to='/'>
                        <Button type='link'>магазин</Button>
                    </Link>
                    <Link to='/'>
                        <Button type='link'>сдать землю</Button>
                    </Link>
                </div>

            </div>
        </header>
    );
}
