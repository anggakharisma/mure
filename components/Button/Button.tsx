import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps  = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
}

const Button = (props: ButtonProps) => {
  return <button {...props}></button>
}

export default Button;
