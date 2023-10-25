import React, { ReactNode } from "react";

interface TableCell {
    content: string | ReactNode;
}

const TableCell = (props: TableCell) => {
    return <div className="table__td">{props.content}</div>;
};
export default TableCell;
