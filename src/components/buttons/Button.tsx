import React from "react";

import "./button.scss";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    caption?: string
    icon?: React.ReactNode
}

const ButtonLight = ({icon, caption, ...props}: ButtonProps) => {
    return (
        <button {...props} className="btn-standard btn-light">
            {icon}
            {caption && <span>{caption}</span>}
        </button>
    )
}

const ButtonDark = ({caption, ...props}: ButtonProps) => {
    return (
        <button {...props} className="btn-standard btn-dark">
            {caption && <span>{caption}</span>}
        </button>
    )
}

export { ButtonLight, ButtonDark }