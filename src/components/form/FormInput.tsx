import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import "./form-input.scss"

type FormInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput = (props: FormInputProps) => {
    return (
        <div className="form-input">
            <input className="form-input-field" {...props}/>
        </div>
    )
}

export default FormInput