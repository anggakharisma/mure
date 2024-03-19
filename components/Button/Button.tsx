import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
}

export const ButtonPrimary = (props: ButtonProps) => {
  return <button className="bg-primary p-4 px-8 text-white rounded-md text-xl" {...props}>{props.children}</button>
}

