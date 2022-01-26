import { ColumnsType } from "rc-table/lib/interface";
import { Employee } from "../../api/entities";

export const columns: ColumnsType<Employee>  = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName'
    }, 
    {
        title: 'Имя',
        dataIndex: 'firstName'
    }, 
    {
        title: "Отчество",
        dataIndex: "middleName"
    },
    {
        title: "Должность",
        dataIndex: "position"
    },
    {
        title: "Специализация",
        dataIndex: "speciality"
    }
]