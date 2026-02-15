import type React from "react";

type ListProps<T>={
    items: T[];
    render: (item: T)=>React.ReactNode
}

function List<T>({items,render}: ListProps<T>){
    return <>{items.map(render)}</>
}

export default List;