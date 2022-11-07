import ControlStyle from "../../styles/Control.module.css";
import Image from "next/image";

export const Control = () => {
  return (
    <div className={ControlStyle.ControlContainer}>
      <div className="flex justify-center items-center">
        <div className="relative hover:cursor-pointer">
          <Image src="/images/prev.svg" width={40} height={40} />
        </div>
        <p className="mx-8">pause</p>
        <div className="relative hover:cursor-pointer">
          <Image src="/images/next.svg" width={40} height={40} />
        </div>
      </div>
      <div className="w-3/4 m-auto bg-gray-200 h-2"></div>
    </div>
  );
};
