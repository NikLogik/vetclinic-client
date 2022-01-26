import { MenuItem, MenuItemGroup } from "rc-menu";
import Menu from "rc-menu"
import { useState } from "react";
import "rc-menu/assets/index.css"
import "./app-menu.scss";
import { NavLink } from "./NavLink";
import { LogoIcon } from "../Icons";

const AppMenu = () => {

    return (
        <div className="app-menu">
            <div className="app-logo">
                <LogoIcon/>
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