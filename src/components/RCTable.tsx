import Table from "rc-table";
import { DefaultRecordType } from "rc-table/lib/interface";
import { TableProps } from "rc-table/lib/Table";
import "rc-table/assets/index.css";
import "./rc-table.scss";

const RCTable = <RecordType extends DefaultRecordType>(props: TableProps<RecordType>) => <Table {...props}/>

export default RCTable;