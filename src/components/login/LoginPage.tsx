import { ButtonLight } from "../buttons/Button";
import FormInput from "../form/FormInput";
import { Password, UserLogin } from "../Icons";
import "./login-page.scss"

const LoginPage = () => {
    return (
        <div className="login-page">
            <form className="login-form">
                <div className="login-fields">
                    <div className="input-field">
                        <UserLogin />
                        <FormInput type="email" placeholder="Пользователь" required/>
                    </div>
                    <div className="input-field">
                        <Password />
                        <FormInput type="text" placeholder="Пароль"/>
                    </div>
                </div>
                <div className="submit-form">
                    <ButtonLight type="submit" caption="Войти"/>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;