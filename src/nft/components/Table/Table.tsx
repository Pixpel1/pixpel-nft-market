import React from "react";
import TableCell from "./TableCell/TableCell";
import TableRow from "./TableRow/TableRow";

interface Table {
    classes: string;
}

const Table = (props: Table) => {
    let className = "table";
    if (props.classes) className += ` ${props.classes}`;
    return <div className={className}></div>;
};
const TableComps = { Table, TableCell, TableRow };
export default TableComps;
