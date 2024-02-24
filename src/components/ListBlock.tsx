import {useEffect, useState} from "react";

import axios from "axios";
import {ListItem} from "./ListItem/ListItem";
import {IDataItem} from "../type/DataItem";
export const ListBlock = () => {
    const [data, setData] = useState<IDataItem[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const {data} = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                );
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        data && console.log(data);
    }, [data]);

    return (
        <div>
            {data.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                ></ListItem>
            ))}
        </div>
    );
};
