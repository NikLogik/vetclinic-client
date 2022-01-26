import { EmployeeType } from "./enums";

export interface Employee {
    id: number
    firstName: string
    lastName: string
    middleName?: string
    speciality?: string
    position: EmployeeType
}