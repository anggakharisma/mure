import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps  = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
}

const SpecialButton = (props: ButtonProps) => {
  return <button {...props}></button>
}

export default SpecialButton;
