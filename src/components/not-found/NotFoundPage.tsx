import { useLocation } from "react-router-dom";
import "./not-found-page.scss"

const NotFoundPage = () => {
    const location = useLocation()
    return (
    <div className="page-content">
        <div className="not-found-title">
            <span>404</span>
        </div>
        <div className="not-found-description">
            <span>Ups..Page {location.pathname} not found</span>
        </div>
    </div>
    )
}


export default NotFoundPage;