import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

const Input = (props: InputProps) => {
  return <input className="bg-gray-100 focus:border-primary focus:outline-primary p-4 min-w-[360px]" {...props} />
}

export default Input;
