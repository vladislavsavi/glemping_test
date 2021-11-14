import {FC} from "react";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {EnvironmentOutlined} from "@ant-design/icons";
import {Basket, UserMenu} from "@components";
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
                    <Link className={classes.headerLink} to='/'>
                        <Button className={classes.headerLinkBtn} type='link'>главная</Button>
                    </Link>
                    <Link className={classes.headerLink} to='/'>
                        <Button
                            className={classes.headerLinkBtn}
                            icon={<EnvironmentOutlined/>}
                            type='link'
                        >
                            карта глэмпингов
                        </Button>
                    </Link>
                    <Link className={classes.headerLink} to='/'>
                        <Button className={classes.headerLinkBtn} type='link'>магазин</Button>
                    </Link>
                    <Link className={classes.headerLink} to='/'>
                        <Button className={classes.headerLinkBtn} type='link'>сдать землю</Button>
                    </Link>
                </div>

                <div className={classes.actions}>
                    <a className={classes.headerLink} href={'tel:+7 (707) 811 93 18'}>
                        <Button className={classes.headerLinkBtn} type='link'>+7 (707) 811 93 18</Button>
                    </a>
                    <Basket itemCount={2}/>
                    <UserMenu/>
                </div>

            </div>
        </header>
    );
}
