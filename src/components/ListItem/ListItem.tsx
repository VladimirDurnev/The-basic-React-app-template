import React, {useState} from "react";
import {IDataItem} from "../../type/DataItem";
import style from "./ListItem.module.css";

export const ListItem = (props: any) => {
    const {id, title, body}: IDataItem = props;
    const {onClick}: {onClick: (id: number) => void} = props;
    const [red, setRed] = useState(false);

    return (
        <div>
            <p>id: {id}</p>
            <p
                onClick={() => setRed(!red)}
                className={red ? style.active : undefined}
            >
                title: {title}
            </p>
            <p className={style.active}> body: {body}</p>
            <button onClick={() => onClick(id)}>onClick</button>
        </div>
    );
};
