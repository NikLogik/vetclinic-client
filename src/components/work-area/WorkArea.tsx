import { Navigate, Route, Routes } from "react-router-dom";
import EmployeesPage from "../employees/EmployeesPage";
import Home from "../home/Home";
import LoginPage from "../login/LoginPage";
import NotFoundPage from "../not-found/NotFoundPage";

const WorkArea = () => {
    return (
    <div className="app-work-area">
        <Routes>
            <Route path="/" element={<Navigate to={"/home"}/>}/>
            <Route path="/employees" element={<EmployeesPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
    )
}

export default WorkArea;