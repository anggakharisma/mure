interface ModalProps {
  children: React.ReactNode,
  isVisible: boolean
}

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.isVisible &&
        <div className="z-[100] bg-black bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 flex align-middle items-center justify-center text-md">
          {props.children}
        </div>
      }
    </>
  )
}

export default Modal;
