import { createContext, useState } from "react";

type ModalContextType = {
  showModal: boolean
  setShowModal: any
}

export const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: React.ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{
      showModal,
      setShowModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
