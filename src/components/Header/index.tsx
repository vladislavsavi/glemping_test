import {FC} from "react";
import classes from './Header.module.less';

export const Header: FC = () => {
    return (
        <div className={classes.header}>
            <h1>Header</h1>
        </div>
    );
}
