import { FC } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Basket, UserMenu } from "@components";
import { ReactComponent as Logo } from "@assets/imgs/Logo.svg";

import classes from "./Header.module.less";

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <nav className={clsx("container", classes.headerContentWrapper)}>
        <Link to="/">
          <Logo />
        </Link>

        <div>
          <NavLink
            className={({ isActive }) =>
              clsx(classes.headerLink, { [classes.activeLink]: isActive })
            }
            to="/"
          >
            <Button className={classes.headerLinkBtn} type="link">
              главная
            </Button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(classes.headerLink, { [classes.activeLink]: isActive })
            }
            to="map"
          >
            <Button
              className={classes.headerLinkBtn}
              icon={<EnvironmentOutlined />}
              type="link"
            >
              карта глэмпингов
            </Button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(classes.headerLink, { [classes.activeLink]: isActive })
            }
            to="market"
          >
            <Button className={classes.headerLinkBtn} type="link">
              магазин
            </Button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(classes.headerLink, { [classes.activeLink]: isActive })
            }
            to="rent"
          >
            <Button className={classes.headerLinkBtn} type="link">
              сдать землю
            </Button>
          </NavLink>
        </div>

        <div className={classes.actions}>
          <a className={classes.headerLink} href={"tel:+7 (707) 811 93 18"}>
            <Button className={classes.headerLinkBtn} type="link">
              +7 (707) 811 93 18
            </Button>
          </a>
          <Basket itemCount={2} />
          <UserMenu />
        </div>
      </nav>
    </header>
  );
};
