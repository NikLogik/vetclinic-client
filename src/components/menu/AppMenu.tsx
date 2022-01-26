import "rc-menu/assets/index.css"
import "./app-menu.scss";
import { NavLink } from "./NavLink";
import { LogoIcon } from "../Icons";
import { Link } from "react-router-dom";

const AppMenu = () => {

    return (
        <div className="app-menu">
            <div className="app-logo">
                <Link to="/home" >
                    <LogoIcon/>
                </Link>
            </div>
            <div className="app-menu-content">
                <NavLink caption="СТАЦИОНАР" to="/hospital"/>
                <NavLink caption="РАСПИСАНИЕ" to="/calendar"/>
                <NavLink caption="СОТРУДНИКИ" to="/employees"/>
                <NavLink caption="СКЛАД" to="/storage"/>
                <NavLink caption="ПАЦИЕНТЫ" to="/clients"/>

            </div>
            <div className="app-menu-footer">
                <NavLink caption="ВХОД" to="/login"/>
            </div>
        </div>
    )
}

export default AppMenu;