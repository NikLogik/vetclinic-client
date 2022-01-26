import { ButtonLight } from "../buttons/Button";
import "./login-page.scss"

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-form">
                <input type="text" placeholder="Пользователь"/>
                <input type="text" placeholder="Пароль"/>
            </div>
            <div className="submit-form">
                <ButtonLight caption="Войти"/>
            </div>
        </div>
    )
}

export default LoginPage;