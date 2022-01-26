import "./employees-page.scss";

import { useEffect, useState } from "react";
import { Employee } from "../../api/entities";
import RestClient from "../../api/rest";
import { ButtonLight } from "../buttons/Button";
import { columns } from "./table.config";
import RCTable from "../RCTable";
import { Close, EditSquare, Plus } from "../Icons";

const fetchAll = async () => {
    return RestClient.get("/employees").then(response=>JSON.parse(response.data) as Employee[])
}

const EmployeesPage = () => {

    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        fetchAll().then(data => setEmployees(data))
    },[])

    const expandId = (record: Employee) => record.id

    const onRow = (data: Employee, index?: number) => ({
        onClick: () => {console.log(data, index)}
    })

    return (
    <div className="employees-page">
        <div className="employees-table-title">
            <span>Сотрудники</span>
        </div>
        <div className="btn-group">
            <ButtonLight icon={<Plus/>} caption="Добавить"/>
            <ButtonLight icon={<EditSquare/>} caption="Изменить"/>
            <ButtonLight icon={<Close/>} caption="Удалить" />
        </div>
        <RCTable columns={columns} data={employees} 
        onRow={onRow} rowKey={expandId} emptyText={"Таблица пустая"}/>
    </div>)
}

export default EmployeesPage;