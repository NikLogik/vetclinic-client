import {LinkProps, Link} from "react-router-dom"
import "./nav-link.scss";

type NavLinkProps = {
    caption: string
}

export const NavLink = ({caption, ...props}: NavLinkProps & LinkProps) => 
    <div className="nav-link-item">
        <Link  {...props} className="nav-link">{caption}</Link>
    </div>