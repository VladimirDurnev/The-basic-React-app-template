import React, {useState} from "react";
import {IDataItem} from "../../type/DataItem";
import style from "./ListItem.module.css";

export const ListItem = (props: IDataItem) => {
    const {id, title, body}: IDataItem = props;

    const [red, setRed] = useState(false);

    return (
        <div>
            <p>id: { id }</p>
            <p
                onClick={() => setRed(!red)}
                className={red ? style.active : undefined}
            >
                title: {title}
            </p>
            <p className={style.active}> body: {body}</p>
        </div>
    );
};
