import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
}

export const ButtonPrimary = (props: ButtonProps) => {
  return <button className="active:bg-primary active:opacity-80 disabled:bg-gray-300 bg-primary p-4 px-6 text-white rounded-lg text-md" {...props}>{props.children}</button>
}

